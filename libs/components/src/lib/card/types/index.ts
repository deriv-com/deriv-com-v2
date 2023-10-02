import { ReactNode } from 'react';

export type StatCardVariant = 'white' | 'dark' | 'coral';

export interface StatCardContent {
  id: number;
  header: string;
  description: string;
  color?: StatCardVariant;
}

export interface CardContent {
  icon?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  link?: {
    content: ReactNode;
    href: string;
  };
  content?: ReactNode;
  colorVariant: 'light' | 'gray';
  alignVariant: 'start' | 'center';
  sizeVariant: 'sm' | 'md' | 'lg';
  className?: string;
  contentClassName?: string;
  nonContentClassName?: string;
}
