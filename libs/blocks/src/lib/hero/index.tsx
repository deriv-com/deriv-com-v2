import ContentLimit from './content-limit';
import ContentLimitless from './content-limitless';
import { ReactNode } from 'react';

/* eslint-disable-next-line */

export interface HeroProps {
  className?: string;
  title?: string;
  title_type?: 'hero' | 'h1';
  description?: string;
  content?: ReactNode;
  children?: ReactNode;
}

type HeroVariants = {
  ContentLimitless: typeof ContentLimitless;
  ContentLimit: typeof ContentLimit;
};

export const Hero: HeroVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Hero.ContentLimitless = ContentLimitless;
Hero.ContentLimit = ContentLimit;

export default Hero;
