import type { Campaign } from './types';

/**
 * DEMO / MOCK campaign data. Static frontend only — there is no real
 * application/submission system. Values are illustrative.
 */
export const campaigns: Campaign[] = [
  {
    slug: 'jom-makan-kelantan',
    title: 'Jom Makan Kelantan',
    brand: 'Tourism Kelantan',
    category: 'Food',
    platforms: ['tiktok', 'instagram'],
    status: 'active',
    bonusPoints: 5,
    cover: 'sunset',
    description:
      'Angkat kekayaan warisan kulinari Kelantan — dari nasi kerabu hingga budu — kepada audiens seluruh Malaysia menerusi kandungan pendek yang menyelerakan.',
    requirements: [
      'Minimum 3 kandungan video (TikTok/Reels)',
      'Ceritakan sekurang-kurangnya 2 hidangan warisan',
      'Tag lokasi & jenama kempen',
      'Tempoh penerbitan dalam 3 minggu',
    ],
    performance: { engagement: 92, contentQuality: 95, reach: 89, consistency: 94 },
    campaignScore: 93,
    participants: 48,
    period: 'Ogos – September 2026',
    featuredCreators: ['danish-hakimi', 'ivy-chong', 'haziq-danial'],
  },
  {
    slug: 'raya-glow-2026',
    title: 'Raya Glow 2026',
    brand: 'Seri Ayu Beauty',
    category: 'Beauty',
    platforms: ['instagram', 'tiktok', 'youtube'],
    status: 'active',
    bonusPoints: 6,
    cover: 'rose',
    description:
      'Kempen solek raya yang meraikan seri wajah tempatan. Kreator berkongsi tutorial solek lestari yang sesuai untuk iklim Malaysia.',
    requirements: [
      'Tutorial solek lengkap (1 video panjang + 2 pendek)',
      'Paparkan produk kempen secara semula jadi',
      'Sertakan tips penjagaan kulit',
      'Engagement dengan komuniti dalam 48 jam',
    ],
    performance: { engagement: 94, contentQuality: 93, reach: 91, consistency: 90 },
    campaignScore: 92,
    participants: 63,
    period: 'September – Oktober 2026',
    featuredCreators: ['nurin-adriana', 'tasha-marlina', 'mia-carlisya'],
  },
  {
    slug: 'jelajah-borneo',
    title: 'Jelajah Borneo',
    brand: 'Sabah Tourism Board',
    category: 'Travel',
    platforms: ['youtube', 'instagram', 'facebook'],
    status: 'active',
    bonusPoints: 7,
    cover: 'ocean',
    description:
      'Terokai keindahan Sabah & Sarawak — dari Gunung Kinabalu ke perkampungan pesisir — dalam siri pengembaraan sinematik.',
    requirements: [
      '1 vlog perjalanan penuh (YouTube)',
      '3 sorotan Reels/Shorts',
      'Highlight destinasi kurang dikenali',
      'Kandungan mesra pelancongan lestari',
    ],
    performance: { engagement: 90, contentQuality: 96, reach: 88, consistency: 89 },
    campaignScore: 91,
    participants: 34,
    period: 'Julai – September 2026',
    featuredCreators: ['firdaus-rahman', 'wan-safiya'],
  },
  {
    slug: 'tech-untuk-semua',
    title: 'Tech Untuk Semua',
    brand: 'Digital Malaysia',
    category: 'Technology',
    platforms: ['youtube', 'threads', 'tiktok'],
    status: 'active',
    bonusPoints: 4,
    cover: 'aurora',
    description:
      'Demokrasikan literasi digital — kreator menerangkan AI, keselamatan siber & produktiviti kepada rakyat Malaysia dalam bahasa mudah.',
    requirements: [
      'Siri penjelas 3 bahagian',
      'Fokus aplikasi harian, bukan jargon',
      'Sertakan panduan langkah demi langkah',
      'Galakkan soal jawab komuniti',
    ],
    performance: { engagement: 87, contentQuality: 92, reach: 85, consistency: 91 },
    campaignScore: 89,
    participants: 27,
    period: 'September 2026',
    featuredCreators: ['aiman-tan', 'adam-mikael'],
  },
  {
    slug: 'gaya-hidup-sihat',
    title: 'Gaya Hidup Sihat',
    brand: 'FitLife Malaysia',
    category: 'Lifestyle',
    platforms: ['instagram', 'tiktok'],
    status: 'upcoming',
    bonusPoints: 5,
    cover: 'lime',
    description:
      'Kempen gaya hidup aktif — kreator berkongsi rutin senaman, pemakanan seimbang & kesihatan mental untuk komuniti bandar.',
    requirements: [
      'Cabaran 21 hari gaya hidup sihat',
      'Dokumentasi progres mingguan',
      'Kandungan mesra pemula',
      'Kolaborasi dengan komuniti',
    ],
    performance: { engagement: 0, contentQuality: 0, reach: 0, consistency: 0 },
    campaignScore: 0,
    participants: 0,
    period: 'Oktober – November 2026',
    featuredCreators: ['aisyah-sofea', 'sofia-nabila'],
  },
  {
    slug: 'usahawan-muda',
    title: 'Usahawan Muda',
    brand: 'MyStartup',
    category: 'Business',
    platforms: ['threads', 'youtube', 'facebook'],
    status: 'completed',
    bonusPoints: 5,
    cover: 'violet',
    description:
      'Angkat kisah usahawan muda Malaysia — dari idea ke pasaran — untuk memberi inspirasi generasi pembina seterusnya.',
    requirements: [
      'Temu bual / kisah usahawan',
      'Kongsi pengajaran perniagaan sebenar',
      'Kandungan boleh diambil tindakan',
      'Format siri berterusan',
    ],
    performance: { engagement: 88, contentQuality: 90, reach: 86, consistency: 92 },
    campaignScore: 89,
    participants: 41,
    period: 'Mei – Julai 2026',
    featuredCreators: ['elly-suraya', 'khalis-arif'],
  },
];

export const campaignMap: Record<string, Campaign> = Object.fromEntries(
  campaigns.map((c) => [c.slug, c]),
);

export function getCampaign(slug: string): Campaign | undefined {
  return campaignMap[slug];
}

export const activeCampaigns = campaigns.filter((c) => c.status === 'active');
