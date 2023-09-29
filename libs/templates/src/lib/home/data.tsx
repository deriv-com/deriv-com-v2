import { OptimizedImage, StatCardContent } from '@deriv-com/components';
import { ReactNode } from 'react';

export const homeStatData: StatCardContent[] = [
  {
    id: 0,
    color: 'dark',
    header: '$48M+',
    description: 'Monthly withdrawals',
  },
  {
    id: 1,
    color: 'white',
    header: '$650B+',
    description: 'Monthly volume',
  },
  {
    id: 2,
    color: 'dark',
    header: '168M+',
    description: 'Monthly deals',
  },
  {
    id: 3,
    color: 'coral',
    header: '300K+',
    description: 'Monthly active traders',
  },
];

export const heroItems: { key: string; image: ReactNode }[] = [
  {
    key: 'hero1',
    image: (
      <OptimizedImage
        imageName="home/features/hk_home_hero_1.png"
        alt="hero 1"
        width={760}
        height={768}
        className="max-lg:m-auto"
      />
    ),
  },
  {
    key: 'hero2',
    image: (
      <OptimizedImage
        imageName="home/features/hk_home_hero_2.png"
        alt="hero 2"
        width={760}
        height={768}
        className="max-lg:m-auto"
      />
    ),
  },
];

export const homeStatNumbers: StatCardContent[] = [
  {
    id: 0,
    header: '2.5M+',
    description: 'traders',
  },
  {
    id: 1,
    header: '20+ years',
    description: 'of experience',
  },
  {
    id: 2,
    header: '20B+',
    description: 'daily trades',
  },
  {
    id: 3,
    header: '50+',
    description: 'trading assets',
  },
  {
    id: 4,
    header: '0',
    description: 'commission',
  },
];
