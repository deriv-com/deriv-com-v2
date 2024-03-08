import { ReactNode } from 'react';

export type StatCardVariant = 'white' | 'dark' | 'coral';
export type CardColorVariant = 'light' | 'gray';
export type CardAlignVariant = 'start' | 'center';
export type CardSizeVariant = 'xs' | 'sm' | 'md' | 'lg';
export type CardLinkTargetVariant = '_blank' | '_self' | '_parent' | '_top';

interface BaseCardContent {
  header?: ReactNode;
  id: number;
}
//todo: removed [LinkProps] from utils/generics and added here. we need to update this because we are using this on multiple places
interface LinkProps {
  content: ReactNode;
  href: string;
  descriptiveText?: string;
  target?: CardLinkTargetVariant;
}

export interface StatCardContent extends BaseCardContent {
  color?: StatCardVariant;
  description: string;
}

export interface CardContent extends BaseCardContent {
  icon?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  link?: LinkProps;
  content?: ReactNode;
  color: CardColorVariant;
  align: CardAlignVariant;
  size: CardSizeVariant;
  className?: string;
  minHeight?: string;
  contentClassName?: string;
  nonContentClassName?: string;
}

export type MarketStatus = 'up' | 'down' | 'closed';
export interface LiveMarketContent {
  id: number;
  instrumentIcon: ReactNode;
  instrument: string;
  changePercentage: string;
  mid: number;
  bidPrice: string;
  askPrice: string;
  spread: string;
  bidContent: ReactNode;
  askContent: ReactNode;
  spreadContent: ReactNode;
  buyContent: ReactNode;
  sellContent: ReactNode;
  onClickBuyButton?: () => void;
  onClickSellButton?: () => void;
}
