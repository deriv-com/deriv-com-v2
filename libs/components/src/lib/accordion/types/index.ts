import { ReactNode } from 'react';

export interface AccordionProps {
  id?: string;
  className?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  content?: () => ReactNode;
  expanded?: boolean;
  customContent?: () => ReactNode;
  divider?: AccordionDivider;
  contentClass?: string;
  background?: BgVariant;
  onExpand?: (e: boolean, i: string) => void;
}
export type BgVariant = 'light' | 'gray';
export type AccordionDivider = 'none' | 'both' | 'bottom';
