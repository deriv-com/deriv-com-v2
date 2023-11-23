import { ReactNode } from 'react';

export interface AccordionProps {
  id?: string;
  tabId?: number;
  className?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  content?: () => ReactNode;
  expanded?: boolean;
  customContent?: () => ReactNode;
  divider?: AccordionDivider;
  contentClass?: string;
  onExpand?: (e: boolean, i: string) => void;
}

export type AccordionDivider = 'none' | 'both' | 'bottom';
