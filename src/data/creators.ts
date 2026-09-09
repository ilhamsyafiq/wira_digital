import type { Creator, PlatformId, PlatformScores, Performance, Trend } from './types';
import { platformOrder } from './platforms';

/**
 * DEMO / MOCK dataset.
 *
 * ⚠️ This is sample data for a static frontend MVP. Rankings and scores are
 * NOT live — they are illustrative demo values. Swap this module for a real
 * repository/API later (see data/types.ts) without touching UI components.
 */

interface RawCreator {
  slug: string;
  username: string;
  name: string;
  category: string;
  state: string;
  verified: boolean;
  baseScore: number;
  campaignBonus: number;
  dailyMediaBonus: number;
  platforms: PlatformScores;
  performance: Performance;
  trend: Trend;
  trendValue: number;
  followers: string;
  campaignsCompleted: number;
  avgCampaignScore: number;
  dailyMedia: { featured: boolean; features: number; lastFeatured?: string };
  achievements: string[];
  bio: string;
}

const raw: RawCreator[] = [
  {
    slug: 'aisyah-sofea',
    username: '@aisyahsofea',
    name: 'Aisyah Sofea',
    category: 'Lifestyle',
    state: 'Selangor',
    verified: true,
    baseScore: 86,
    campaignBonus: 6,
    dailyMediaBonus: 2,
    platforms: { instagram: 94, tiktok: 96, threads: 91, facebook: 88, youtube: 90 },
    performance: { engagement: 96, consistency: 91, growth: 94, contentQuality: 95, audienceQuality: 90, brandSafety: 98 },
    trend: 'up',
    trendValue: 3,
    followers: '1.4M',
    campaignsCompleted: 12,
    avgCampaignScore: 94,
    dailyMedia: { featured: true, features: 5, lastFeatured: 'September 2026' },
    achievements: ['Top Lifestyle Creator', 'DailyMedia Featured', 'Campaign Champion', 'Rising Creator'],
    bio: 'Kreator gaya hidup dari Shah Alam yang berkongsi rutin harian, fesyen mampu milik dan tips produktiviti.',
  },
  {
    slug: 'danish-hakimi',
    username: '@danishhakimi',
    name: 'Danish Hakimi',
    category: 'Food',
    state: 'Kelantan',
    verified: true,
    baseScore: 84,
    campaignBonus: 5,
    dailyMediaBonus: 3,
    platforms: { instagram: 90, tiktok: 95, threads: 87, facebook: 92, youtube: 89 },
    performance: { engagement: 95, consistency: 93, growth: 88, contentQuality: 94, audienceQuality: 89, brandSafety: 96 },
    trend: 'up',
    trendValue: 4,
    followers: '980K',
    campaignsCompleted: 9,
    avgCampaignScore: 92,
    dailyMedia: { featured: true, features: 4, lastFeatured: 'August 2026' },
    achievements: ['Top Food Creator', 'DailyMedia Featured', 'Campaign Champion'],
    bio: 'Peneroka rasa nusantara — dari warung tepi jalan Kota Bharu hingga hidangan viral seluruh Malaysia.',
  },
  {
    slug: 'nurin-adriana',
    username: '@nurinadriana',
    name: 'Nurin Adriana',
    category: 'Beauty',
    state: 'Kuala Lumpur',
    verified: true,
    baseScore: 85,
    campaignBonus: 4,
    dailyMediaBonus: 1,
    platforms: { instagram: 93, tiktok: 92, threads: 88, facebook: 84, youtube: 91 },
    performance: { engagement: 92, consistency: 90, growth: 91, contentQuality: 93, audienceQuality: 88, brandSafety: 95 },
    trend: 'stable',
    trendValue: 0,
    followers: '1.1M',
    campaignsCompleted: 14,
    avgCampaignScore: 90,
    dailyMedia: { featured: true, features: 3, lastFeatured: 'July 2026' },
    achievements: ['Top Beauty Creator', 'DailyMedia Featured', 'Consistency Award'],
    bio: 'Artis solek & pengasas rutin penjagaan kulit ringkas untuk iklim tropika Malaysia.',
  },
  {
    slug: 'firdaus-rahman',
    username: '@firdausrahman',
    name: 'Firdaus Rahman',
    category: 'Travel',
    state: 'Sabah',
    verified: true,
    baseScore: 82,
    campaignBonus: 7,
    dailyMediaBonus: 2,
    platforms: { instagram: 91, tiktok: 89, threads: 84, facebook: 90, youtube: 93 },
    performance: { engagement: 90, consistency: 87, growth: 93, contentQuality: 94, audienceQuality: 86, brandSafety: 94 },
    trend: 'up',
    trendValue: 5,
    followers: '760K',
    campaignsCompleted: 8,
    avgCampaignScore: 93,
    dailyMedia: { featured: true, features: 6, lastFeatured: 'September 2026' },
    achievements: ['Top Travel Creator', 'DailyMedia Featured', 'Rising Creator'],
    bio: 'Pengembara Borneo yang merakam permata tersembunyi Sabah & Sarawak dalam sinematografi memukau.',
  },
  {
    slug: 'qaseh-melur',
    username: '@qasehmelur',
    name: 'Qaseh Melur',
    category: 'Fashion',
    state: 'Penang',
    verified: true,
    baseScore: 83,
    campaignBonus: 5,
    dailyMediaBonus: 0,
    platforms: { instagram: 92, tiktok: 90, threads: 89, facebook: 82, youtube: 85 },
    performance: { engagement: 91, consistency: 89, growth: 90, contentQuality: 92, audienceQuality: 87, brandSafety: 93 },
    trend: 'up',
    trendValue: 2,
    followers: '690K',
    campaignsCompleted: 7,
    avgCampaignScore: 89,
    dailyMedia: { featured: false, features: 0 },
    achievements: ['Rising Creator', 'Campaign Champion'],
    bio: 'Penggaya fesyen moden-tradisional dari George Town, memadukan warisan dengan trend semasa.',
  },
  {
    slug: 'harith-iskandar',
    username: '@harithiskandar',
    name: 'Harith Iskandar',
    category: 'Entertainment',
    state: 'Johor',
    verified: true,
    baseScore: 84,
    campaignBonus: 3,
    dailyMediaBonus: 1,
    platforms: { instagram: 88, tiktok: 94, threads: 85, facebook: 91, youtube: 90 },
    performance: { engagement: 94, consistency: 88, growth: 87, contentQuality: 90, audienceQuality: 85, brandSafety: 92 },
    trend: 'down',
    trendValue: 1,
    followers: '1.3M',
    campaignsCompleted: 10,
    avgCampaignScore: 88,
    dailyMedia: { featured: true, features: 2, lastFeatured: 'June 2026' },
    achievements: ['Top Entertainment Creator', 'DailyMedia Featured'],
    bio: 'Pencipta komedi sketsa yang mengangkat humor harian rakyat Malaysia ke skrin.',
  },
  {
    slug: 'zara-humaira',
    username: '@zarahumaira',
    name: 'Zara Humaira',
    category: 'Parenting',
    state: 'Terengganu',
    verified: false,
    baseScore: 81,
    campaignBonus: 4,
    dailyMediaBonus: 2,
    platforms: { instagram: 89, tiktok: 87, threads: 90, facebook: 88, youtube: 82 },
    performance: { engagement: 93, consistency: 92, growth: 84, contentQuality: 89, audienceQuality: 91, brandSafety: 97 },
    trend: 'up',
    trendValue: 6,
    followers: '540K',
    campaignsCompleted: 6,
    avgCampaignScore: 91,
    dailyMedia: { featured: true, features: 3, lastFeatured: 'August 2026' },
    achievements: ['Rising Creator', 'DailyMedia Featured', 'Consistency Award'],
    bio: 'Ibu kepada tiga cahaya mata yang berkongsi rutin keibubapaan lembut & aktiviti keluarga.',
  },
  {
    slug: 'imran-zulkifli',
    username: '@imranzulkifli',
    name: 'Imran Zulkifli',
    category: 'Automotive',
    state: 'Perak',
    verified: true,
    baseScore: 80,
    campaignBonus: 6,
    dailyMediaBonus: 0,
    platforms: { instagram: 85, tiktok: 88, threads: 80, facebook: 89, youtube: 92 },
    performance: { engagement: 88, consistency: 86, growth: 89, contentQuality: 91, audienceQuality: 84, brandSafety: 90 },
    trend: 'up',
    trendValue: 3,
    followers: '620K',
    campaignsCompleted: 8,
    avgCampaignScore: 90,
    dailyMedia: { featured: false, features: 0 },
    achievements: ['Top Automotive Creator', 'Campaign Champion'],
    bio: 'Peminat automotif dari Ipoh — ulasan jujur kereta, motosikal & budaya modifikasi tempatan.',
  },
  {
    slug: 'balqis-humairah',
    username: '@balqishumairah',
    name: 'Balqis Humairah',
    category: 'Education',
    state: 'Kedah',
    verified: true,
    baseScore: 82,
    campaignBonus: 2,
    dailyMediaBonus: 2,
    platforms: { instagram: 84, tiktok: 90, threads: 88, facebook: 83, youtube: 89 },
    performance: { engagement: 89, consistency: 94, growth: 86, contentQuality: 90, audienceQuality: 92, brandSafety: 96 },
    trend: 'up',
    trendValue: 4,
    followers: '470K',
    campaignsCompleted: 5,
    avgCampaignScore: 87,
    dailyMedia: { featured: true, features: 2, lastFeatured: 'July 2026' },
    achievements: ['Top Education Creator', 'DailyMedia Featured', 'Consistency Award'],
    bio: 'Guru muda yang menjadikan sains & matematik seronok melalui eksperimen ringkas di rumah.',
  },
  {
    slug: 'aiman-tan',
    username: '@aimantan',
    name: 'Aiman Tan',
    category: 'Technology',
    state: 'Kuala Lumpur',
    verified: true,
    baseScore: 83,
    campaignBonus: 3,
    dailyMediaBonus: 1,
    platforms: { instagram: 82, tiktok: 86, threads: 91, facebook: 80, youtube: 94 },
    performance: { engagement: 87, consistency: 89, growth: 92, contentQuality: 93, audienceQuality: 88, brandSafety: 95 },
    trend: 'up',
    trendValue: 2,
    followers: '580K',
    campaignsCompleted: 6,
    avgCampaignScore: 89,
    dailyMedia: { featured: true, features: 1, lastFeatured: 'September 2026' },
    achievements: ['Top Tech Creator', 'DailyMedia Featured', 'Rising Creator'],
    bio: 'Pengulas gajet & pendidik teknologi yang menerangkan AI dan produk terkini dalam bahasa mudah.',
  },
  {
    slug: 'sofia-nabila',
    username: '@sofianabila',
    name: 'Sofia Nabila',
    category: 'Lifestyle',
    state: 'Melaka',
    verified: false,
    baseScore: 79,
    campaignBonus: 5,
    dailyMediaBonus: 1,
    platforms: { instagram: 88, tiktok: 85, threads: 84, facebook: 82, youtube: 80 },
    performance: { engagement: 90, consistency: 85, growth: 88, contentQuality: 87, audienceQuality: 86, brandSafety: 92 },
    trend: 'up',
    trendValue: 7,
    followers: '410K',
    campaignsCompleted: 5,
    avgCampaignScore: 88,
    dailyMedia: { featured: true, features: 2, lastFeatured: 'August 2026' },
    achievements: ['Rising Creator', 'DailyMedia Featured'],
    bio: 'Kreator gaya hidup Melaka yang menonjolkan seni bandar, kafe & kehidupan slow-living.',
  },
  {
    slug: 'razif-osman',
    username: '@razifosman',
    name: 'Razif Osman',
    category: 'Sports',
    state: 'Pahang',
    verified: true,
    baseScore: 80,
    campaignBonus: 4,
    dailyMediaBonus: 0,
    platforms: { instagram: 83, tiktok: 89, threads: 78, facebook: 86, youtube: 88 },
    performance: { engagement: 88, consistency: 87, growth: 85, contentQuality: 88, audienceQuality: 83, brandSafety: 91 },
    trend: 'stable',
    trendValue: 0,
    followers: '520K',
    campaignsCompleted: 7,
    avgCampaignScore: 86,
    dailyMedia: { featured: false, features: 0 },
    achievements: ['Top Sports Creator', 'Campaign Champion'],
    bio: 'Atlet trail & pencinta sukan lasak yang mendokumentasi cabaran hutan dan gunung Pahang.',
  },
  {
    slug: 'elly-suraya',
    username: '@ellysuraya',
    name: 'Elly Suraya',
    category: 'Business',
    state: 'Selangor',
    verified: true,
    baseScore: 81,
    campaignBonus: 3,
    dailyMediaBonus: 2,
    platforms: { instagram: 86, tiktok: 84, threads: 90, facebook: 87, youtube: 85 },
    performance: { engagement: 86, consistency: 91, growth: 87, contentQuality: 89, audienceQuality: 90, brandSafety: 96 },
    trend: 'up',
    trendValue: 3,
    followers: '450K',
    campaignsCompleted: 9,
    avgCampaignScore: 90,
    dailyMedia: { featured: true, features: 3, lastFeatured: 'September 2026' },
    achievements: ['Top Business Creator', 'DailyMedia Featured'],
    bio: 'Usahawan digital yang berkongsi strategi jenama peribadi & pemasaran untuk PKS Malaysia.',
  },
  {
    slug: 'haziq-danial',
    username: '@haziqdanial',
    name: 'Haziq Danial',
    category: 'Food',
    state: 'Negeri Sembilan',
    verified: false,
    baseScore: 78,
    campaignBonus: 4,
    dailyMediaBonus: 1,
    platforms: { instagram: 84, tiktok: 88, threads: 80, facebook: 85, youtube: 79 },
    performance: { engagement: 89, consistency: 84, growth: 86, contentQuality: 86, audienceQuality: 82, brandSafety: 90 },
    trend: 'up',
    trendValue: 5,
    followers: '380K',
    campaignsCompleted: 4,
    avgCampaignScore: 87,
    dailyMedia: { featured: true, features: 1, lastFeatured: 'August 2026' },
    achievements: ['Rising Creator', 'DailyMedia Featured'],
    bio: 'Pencinta masakan minang & rendang, merakam resipi warisan Negeri Sembilan.',
  },
  {
    slug: 'tasha-marlina',
    username: '@tashamarlina',
    name: 'Tasha Marlina',
    category: 'Beauty',
    state: 'Sarawak',
    verified: true,
    baseScore: 80,
    campaignBonus: 3,
    dailyMediaBonus: 0,
    platforms: { instagram: 87, tiktok: 86, threads: 82, facebook: 81, youtube: 84 },
    performance: { engagement: 88, consistency: 86, growth: 88, contentQuality: 87, audienceQuality: 85, brandSafety: 93 },
    trend: 'up',
    trendValue: 2,
    followers: '420K',
    campaignsCompleted: 6,
    avgCampaignScore: 86,
    dailyMedia: { featured: false, features: 0 },
    achievements: ['Rising Creator', 'Campaign Champion'],
    bio: 'Artis solek Kuching yang mengangkat kecantikan pelbagai kaum Sarawak.',
  },
  {
    slug: 'lukman-hafiz',
    username: '@lukmanhafiz',
    name: 'Lukman Hafiz',
    category: 'Education',
    state: 'Johor',
    verified: false,
    baseScore: 77,
    campaignBonus: 3,
    dailyMediaBonus: 1,
    platforms: { instagram: 80, tiktok: 87, threads: 83, facebook: 79, youtube: 85 },
    performance: { engagement: 85, consistency: 90, growth: 83, contentQuality: 86, audienceQuality: 88, brandSafety: 94 },
    trend: 'up',
    trendValue: 4,
    followers: '340K',
    campaignsCompleted: 4,
    avgCampaignScore: 85,
    dailyMedia: { featured: true, features: 1, lastFeatured: 'July 2026' },
    achievements: ['Rising Creator', 'Consistency Award'],
    bio: 'Jurulatih bahasa Inggeris yang memudahkan pembelajaran melalui video pendek harian.',
  },
  {
    slug: 'wan-safiya',
    username: '@wansafiya',
    name: 'Wan Safiya',
    category: 'Travel',
    state: 'Perlis',
    verified: false,
    baseScore: 76,
    campaignBonus: 4,
    dailyMediaBonus: 2,
    platforms: { instagram: 85, tiktok: 83, threads: 81, facebook: 80, youtube: 82 },
    performance: { engagement: 87, consistency: 83, growth: 89, contentQuality: 85, audienceQuality: 84, brandSafety: 91 },
    trend: 'up',
    trendValue: 8,
    followers: '310K',
    campaignsCompleted: 3,
    avgCampaignScore: 86,
    dailyMedia: { featured: true, features: 2, lastFeatured: 'September 2026' },
    achievements: ['Rising Creator', 'DailyMedia Featured'],
    bio: 'Pengembara solo dari Perlis yang membuktikan negeri terkecil punya kisah terbesar.',
  },
  {
    slug: 'adam-mikael',
    username: '@adammikael',
    name: 'Adam Mikael',
    category: 'Technology',
    state: 'Penang',
    verified: true,
    baseScore: 79,
    campaignBonus: 2,
    dailyMediaBonus: 1,
    platforms: { instagram: 81, tiktok: 84, threads: 88, facebook: 78, youtube: 90 },
    performance: { engagement: 84, consistency: 88, growth: 90, contentQuality: 89, audienceQuality: 86, brandSafety: 93 },
    trend: 'up',
    trendValue: 3,
    followers: '360K',
    campaignsCompleted: 5,
    avgCampaignScore: 87,
    dailyMedia: { featured: true, features: 1, lastFeatured: 'August 2026' },
    achievements: ['Rising Creator', 'DailyMedia Featured'],
    bio: 'Jurutera perisian Bayan Lepas yang berkongsi coding, produktiviti & kerjaya tech.',
  },
  {
    slug: 'mia-carlisya',
    username: '@miacarlisya',
    name: 'Mia Carlisya',
    category: 'Fashion',
    state: 'Kuala Lumpur',
    verified: true,
    baseScore: 80,
    campaignBonus: 5,
    dailyMediaBonus: 2,
    platforms: { instagram: 90, tiktok: 88, threads: 85, facebook: 79, youtube: 83 },
    performance: { engagement: 91, consistency: 85, growth: 87, contentQuality: 90, audienceQuality: 86, brandSafety: 92 },
    trend: 'up',
    trendValue: 4,
    followers: '640K',
    campaignsCompleted: 8,
    avgCampaignScore: 90,
    dailyMedia: { featured: true, features: 3, lastFeatured: 'September 2026' },
    achievements: ['Top Fashion Creator', 'DailyMedia Featured', 'Campaign Champion'],
    bio: 'Penggaya jalanan KL yang mendokumentasi thrift, streetwear & fesyen mampan.',
  },
  {
    slug: 'syafiq-naim',
    username: '@syafiqnaim',
    name: 'Syafiq Naim',
    category: 'Entertainment',
    state: 'Selangor',
    verified: false,
    baseScore: 78,
    campaignBonus: 3,
    dailyMediaBonus: 0,
    platforms: { instagram: 83, tiktok: 90, threads: 79, facebook: 84, youtube: 81 },
    performance: { engagement: 90, consistency: 82, growth: 85, contentQuality: 84, audienceQuality: 81, brandSafety: 89 },
    trend: 'down',
    trendValue: 2,
    followers: '470K',
    campaignsCompleted: 4,
    avgCampaignScore: 84,
    dailyMedia: { featured: false, features: 0 },
    achievements: ['Rising Creator'],
    bio: 'Pemuzik jalanan & pencipta kandungan muzik cover yang popular di TikTok.',
  },
  {
    slug: 'ivy-chong',
    username: '@ivychong',
    name: 'Ivy Chong',
    category: 'Food',
    state: 'Kuala Lumpur',
    verified: true,
    baseScore: 82,
    campaignBonus: 4,
    dailyMediaBonus: 2,
    platforms: { instagram: 89, tiktok: 91, threads: 84, facebook: 86, youtube: 88 },
    performance: { engagement: 92, consistency: 88, growth: 87, contentQuality: 91, audienceQuality: 87, brandSafety: 94 },
    trend: 'up',
    trendValue: 3,
    followers: '710K',
    campaignsCompleted: 10,
    avgCampaignScore: 91,
    dailyMedia: { featured: true, features: 4, lastFeatured: 'September 2026' },
    achievements: ['Top Food Creator', 'DailyMedia Featured', 'Campaign Champion'],
    bio: 'Peneroka hidangan hawker & kopitiam, merentasi budaya makan Malaysia yang pelbagai.',
  },
  {
    slug: 'hana-batrisyia',
    username: '@hanabatrisyia',
    name: 'Hana Batrisyia',
    category: 'Parenting',
    state: 'Selangor',
    verified: false,
    baseScore: 77,
    campaignBonus: 3,
    dailyMediaBonus: 1,
    platforms: { instagram: 86, tiktok: 84, threads: 87, facebook: 85, youtube: 80 },
    performance: { engagement: 89, consistency: 90, growth: 82, contentQuality: 86, audienceQuality: 89, brandSafety: 95 },
    trend: 'stable',
    trendValue: 0,
    followers: '330K',
    campaignsCompleted: 5,
    avgCampaignScore: 86,
    dailyMedia: { featured: true, features: 2, lastFeatured: 'July 2026' },
    achievements: ['DailyMedia Featured', 'Consistency Award'],
    bio: 'Ibu bekerjaya yang berkongsi tips pengurusan masa keluarga & resipi cepat.',
  },
  {
    slug: 'khalis-arif',
    username: '@khalisarif',
    name: 'Khalis Arif',
    category: 'Business',
    state: 'Johor',
    verified: true,
    baseScore: 79,
    campaignBonus: 5,
    dailyMediaBonus: 1,
    platforms: { instagram: 82, tiktok: 85, threads: 89, facebook: 84, youtube: 86 },
    performance: { engagement: 85, consistency: 89, growth: 88, contentQuality: 88, audienceQuality: 87, brandSafety: 94 },
    trend: 'up',
    trendValue: 5,
    followers: '390K',
    campaignsCompleted: 7,
    avgCampaignScore: 89,
    dailyMedia: { featured: true, features: 2, lastFeatured: 'August 2026' },
    achievements: ['Rising Creator', 'DailyMedia Featured', 'Campaign Champion'],
    bio: 'Pelabur & pendidik kewangan yang menyampaikan literasi wang untuk generasi muda.',
  },
];

function clamp(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

/** Determine each creator's strongest platform. */
function topPlatform(platforms: PlatformScores): PlatformId {
  let best: PlatformId = platformOrder[0];
  let bestVal = -1;
  for (const id of platformOrder) {
    const v = platforms[id];
    if (typeof v === 'number' && v > bestVal) {
      bestVal = v;
      best = id;
    }
  }
  return best;
}

/**
 * Build the derived creator list: compute final score
 * (base + campaign bonus + DailyMedia bonus, capped 100), sort, assign rank.
 */
export const creators: Creator[] = raw
  .map((c): Creator => {
    const score = clamp(c.baseScore + c.campaignBonus + c.dailyMediaBonus);
    return {
      ...c,
      slug: c.slug,
      avatar: c.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
      location: `${c.state}, Malaysia`,
      score,
      topPlatform: topPlatform(c.platforms),
      rank: 0,
    };
  })
  .sort((a, b) => b.score - a.score || b.baseScore - a.baseScore)
  .map((c, i) => ({ ...c, rank: i + 1 }));

export const creatorMap: Record<string, Creator> = Object.fromEntries(
  creators.map((c) => [c.slug, c]),
);

export function getCreator(slug: string): Creator | undefined {
  return creatorMap[slug];
}

/** Overall ranking (already sorted by final score). */
export function overallRanking(): Creator[] {
  return creators;
}

/** Ranking for a single platform, sorted by that platform's score. */
export function platformRanking(platform: PlatformId): Creator[] {
  return [...creators]
    .filter((c) => typeof c.platforms[platform] === 'number')
    .sort((a, b) => (b.platforms[platform]! - a.platforms[platform]!));
}

/** Creators with the strongest recent upward movement. */
export function risingCreators(limit = 6): Creator[] {
  return [...creators]
    .filter((c) => c.trend === 'up')
    .sort((a, b) => b.trendValue - a.trendValue)
    .slice(0, limit);
}

/** Creators currently featured on DailyMedia, most features first. */
export function dailyMediaCreators(limit?: number): Creator[] {
  const list = [...creators]
    .filter((c) => c.dailyMedia.featured)
    .sort((a, b) => b.dailyMedia.features - a.dailyMedia.features);
  return typeof limit === 'number' ? list.slice(0, limit) : list;
}
