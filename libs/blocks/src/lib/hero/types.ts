import { ReactNode } from 'react';

export interface HeroBlockProps {
  title?: string;
  description?: string;
  containerClassName?: string;
  content?: ReactNode;
  children?: ReactNode;
  className?: string;
}
