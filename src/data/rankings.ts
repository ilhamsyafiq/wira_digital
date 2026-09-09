/**
 * Ranking helpers — a thin facade over the creator dataset.
 *
 * UI/pages import ranking data from HERE so that the underlying source
 * (mock today, API tomorrow) can change without touching pages.
 */
import type { Creator, PlatformId } from './types';
import {
  overallRanking,
  platformRanking,
  risingCreators,
  dailyMediaCreators,
} from './creators';

export type RankingScope = 'all' | PlatformId;

export function getRanking(scope: RankingScope): Creator[] {
  if (scope === 'all') return overallRanking();
  return platformRanking(scope);
}

/** Score used to display in a given scope (overall final vs platform score). */
export function scopeScore(creator: Creator, scope: RankingScope): number {
  if (scope === 'all') return creator.score;
  return creator.platforms[scope] ?? 0;
}

export { overallRanking, platformRanking, risingCreators, dailyMediaCreators };

/** A snapshot of one creator across scopes — powers "overall vs platform". */
export function creatorScopeSnapshot(creator: Creator) {
  const rows: { scope: RankingScope; label: string; rank: number; score: number }[] = [];
  rows.push({ scope: 'all', label: 'Overall', rank: creator.rank, score: creator.score });
  const platformIds: PlatformId[] = ['instagram', 'tiktok', 'threads', 'facebook', 'youtube'];
  for (const p of platformIds) {
    if (typeof creator.platforms[p] === 'number') {
      const ranked = platformRanking(p);
      const rank = ranked.findIndex((c) => c.slug === creator.slug) + 1;
      rows.push({ scope: p, label: p, rank, score: creator.platforms[p]! });
    }
  }
  return rows;
}
