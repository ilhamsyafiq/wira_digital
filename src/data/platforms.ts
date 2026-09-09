import type { Platform, PlatformId } from './types';

/**
 * Supported social platforms for multi-platform ranking.
 * `icon` maps to a path key rendered by <PlatformIcon />.
 */
export const platforms: Platform[] = [
  { id: 'instagram', name: 'Instagram', handle: 'Instagram', color: '#E1306C', icon: 'instagram' },
  { id: 'tiktok', name: 'TikTok', handle: 'TikTok', color: '#25F4EE', icon: 'tiktok' },
  { id: 'threads', name: 'Threads', handle: 'Threads', color: '#f4f6fb', icon: 'threads' },
  { id: 'facebook', name: 'Facebook', handle: 'Facebook', color: '#1877F2', icon: 'facebook' },
  { id: 'youtube', name: 'YouTube', handle: 'YouTube', color: '#FF0033', icon: 'youtube' },
];

export const platformMap: Record<PlatformId, Platform> = Object.fromEntries(
  platforms.map((p) => [p.id, p]),
) as Record<PlatformId, Platform>;

export const platformOrder: PlatformId[] = platforms.map((p) => p.id);
