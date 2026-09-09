/**
 * WIRADIGITAL — Domain types.
 *
 * These interfaces are the contract between the UI and the data source.
 * Today the data comes from local mock files (`creators.ts`, `campaigns.ts`).
 * Later, a repository/API layer can return the exact same shapes so that no
 * UI component has to change. Keep components depending on THESE types only.
 */

export type PlatformId = 'instagram' | 'tiktok' | 'threads' | 'facebook' | 'youtube';

export type Trend = 'up' | 'down' | 'stable';

/** The six pillars of the Wiradigital Score (each 0–100). */
export interface Performance {
  engagement: number;
  consistency: number;
  growth: number;
  contentQuality: number;
  audienceQuality: number;
  brandSafety: number;
}

export type PlatformScores = Partial<Record<PlatformId, number>>;

export interface DailyMediaExposure {
  featured: boolean;
  features: number;
  lastFeatured?: string;
}

export interface Creator {
  slug: string;
  rank: number;
  username: string; // includes leading @
  name: string;
  avatar: string; // initials-based avatar handled in UI; url optional later
  category: string;
  state: string;
  location: string; // "State, Malaysia"
  verified: boolean;

  /** Base social-media score (0–100), before any campaign/DailyMedia bonus. */
  baseScore: number;
  /** Campaign bonus points contributed to the final score. */
  campaignBonus: number;
  /** DailyMedia exposure bonus points. */
  dailyMediaBonus: number;
  /** Final Wiradigital Score = base + campaignBonus + dailyMediaBonus (capped at 100). */
  score: number;

  platforms: PlatformScores;
  topPlatform: PlatformId;
  performance: Performance;

  trend: Trend;
  trendValue: number;
  followers: string; // human formatted, e.g. "1.2M"

  campaignsCompleted: number;
  avgCampaignScore: number;

  dailyMedia: DailyMediaExposure;
  achievements: string[];
  bio: string;
}

export interface Platform {
  id: PlatformId;
  name: string;
  handle: string;
  color: string; // hex used for accents
  icon: string; // svg path key (rendered by PlatformIcon)
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

export type CampaignStatus = 'active' | 'upcoming' | 'completed';

export interface CampaignPerformance {
  engagement: number;
  contentQuality: number;
  reach: number;
  consistency: number;
}

export interface Campaign {
  slug: string;
  title: string;
  brand: string;
  category: string;
  platforms: PlatformId[];
  status: CampaignStatus;
  bonusPoints: number;
  cover: string; // gradient key
  description: string;
  requirements: string[];
  performance: CampaignPerformance;
  campaignScore: number;
  participants: number;
  period: string;
  featuredCreators: string[]; // creator slugs
}
