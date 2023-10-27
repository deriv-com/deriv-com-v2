import { ReactNode } from 'react';

export interface AccordionProps {
  className?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  content: () => ReactNode;
  expanded?: boolean;
  customContent?: () => ReactNode;
  divider?: AccordionDivider;
}

export type AccordionDivider = 'none' | 'both' | 'bottom';
