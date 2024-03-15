import { StatCardContent } from '@deriv-com/components';
import { ReactNode } from 'react';

export interface V1StatBlockProps {
  title?: ReactNode;
  description?: ReactNode;
  cards: StatCardContent[];
}

export interface V2StatBlockProps {
  cards: StatCardContent[];
  className?: string;
}

export type V3Item = {
  id: number;
  title: ReactNode;
  description: ReactNode;
};

export interface V3StatBlockProps {
  items: V3Item[];
  className?: string;
}
