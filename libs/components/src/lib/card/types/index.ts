import { ReactNode } from 'react';

export type StatCardVariant = 'white' | 'dark' | 'coral';
export type CardColorVariant = 'light' | 'gray';
export type CardAlignVariant = 'start' | 'center';
export type CardSizeVariant = 'sm' | 'md' | 'lg';

interface BaseCardContent {
  header: string;
}

export interface StatCardContent extends BaseCardContent {
  color?: StatCardVariant;
  description: string;
}

export interface CardContent extends BaseCardContent {
  icon?: ReactNode;
  description?: string;
  children?: ReactNode;
  link?: {
    content: ReactNode;
    href: string;
  };
  content?: ReactNode;
  color: CardColorVariant;
  align: CardAlignVariant;
  size: CardSizeVariant;
  className?: string;
  contentClassName?: string;
  nonContentClassName?: string;
}

export type MarketStatus = 'up' | 'down' | 'remain' | 'closed';
export interface LiveMarketContent {
  instrumentIcon: ReactNode;
  instrument: string;
  changePercentage: string;
  status: MarketStatus;
  bidPrice: string;
  askPrice: string;
  spread: string;
}
