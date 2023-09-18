import ImageLimit from './image-limit';
import ImageLimitless from './image-limitless';
import ContentBottom from './content-bottom';
import { ReactNode } from 'react';

/* eslint-disable-next-line */

export interface HeroProps {
  className?: string;
  title?: string;
  title_type?: 'hero' | 'h1';
  description?: string;
  content?: ReactNode;
  children?: ReactNode;
  contentClassName?: string;
}

type HeroVariants = {
  ImageLimitless: typeof ImageLimitless;
  ImageLimit: typeof ImageLimit;
  ContentBottom: typeof ContentBottom;
};

export const Hero: HeroVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Hero.ImageLimitless = ImageLimitless;
Hero.ImageLimit = ImageLimit;
Hero.ContentBottom = ContentBottom;

export default Hero;
