import { ReactNode } from 'react';

export type StatCardVariant = 'white' | 'dark' | 'coral' | 'transparent';
export type CardColorVariant = 'light' | 'gray';
export type CardAlignVariant = 'start' | 'center';
export type CardSizeVariant = 'sm' | 'md' | 'lg';

interface BaseCardContent {
  header?: string;
}
//todo: removed [LinkProps] from utils/generics and added here. we need to update this because we are using this on multiple places
interface LinkProps {
  content: ReactNode;
  href: string;
}

export interface StatCardContent extends BaseCardContent {
  color?: StatCardVariant;
  description: string;
}

export interface CardContent extends BaseCardContent {
  icon?: ReactNode;
  description?: string;
  children?: ReactNode;
  link?: LinkProps;
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
