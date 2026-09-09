import type { Category } from './types';

export const categories: Category[] = [
  { id: 'lifestyle', name: 'Lifestyle', emoji: '✨' },
  { id: 'food', name: 'Food', emoji: '🍜' },
  { id: 'travel', name: 'Travel', emoji: '✈️' },
  { id: 'beauty', name: 'Beauty', emoji: '💄' },
  { id: 'education', name: 'Education', emoji: '📚' },
  { id: 'business', name: 'Business', emoji: '📈' },
  { id: 'automotive', name: 'Automotive', emoji: '🚗' },
  { id: 'entertainment', name: 'Entertainment', emoji: '🎬' },
  { id: 'parenting', name: 'Parenting', emoji: '🍼' },
  { id: 'sports', name: 'Sports', emoji: '⚽' },
  { id: 'technology', name: 'Technology', emoji: '💻' },
  { id: 'fashion', name: 'Fashion', emoji: '👗' },
];

export const categoryNames = categories.map((c) => c.name);

/** Malaysian states used for the location filter. */
export const states: string[] = [
  'Kelantan',
  'Terengganu',
  'Pahang',
  'Selangor',
  'Kuala Lumpur',
  'Penang',
  'Johor',
  'Kedah',
  'Perak',
  'Negeri Sembilan',
  'Melaka',
  'Sabah',
  'Sarawak',
  'Perlis',
];

/** The Wiradigital Score model — original weighting across six pillars. */
export const scoreModel = [
  { key: 'engagement', label: 'Engagement', weight: 30, desc: 'Interaksi sebenar: komen, kongsi, simpan & purata engagement rate.' },
  { key: 'consistency', label: 'Consistency', weight: 20, desc: 'Kekerapan & ketekalan penerbitan kandungan berkualiti.' },
  { key: 'growth', label: 'Growth', weight: 15, desc: 'Momentum pertumbuhan audiens dari semasa ke semasa.' },
  { key: 'contentQuality', label: 'Content Quality', weight: 15, desc: 'Nilai kreatif, penceritaan & pengeluaran kandungan.' },
  { key: 'audienceQuality', label: 'Audience Quality', weight: 10, desc: 'Ketulenan audiens & relevansi demografi.' },
  { key: 'brandSafety', label: 'Brand Safety', weight: 10, desc: 'Kesesuaian jenama, reputasi & keselamatan kandungan.' },
] as const;
