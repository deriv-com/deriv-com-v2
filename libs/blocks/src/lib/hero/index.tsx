import ImageLimitless from './image-limitless';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface HeroProps {}

type HeroVariants = {
  ImageLimitLess: typeof ImageLimitless;
};

export const Hero: HeroVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Hero.ImageLimitLess = ImageLimitless;

export default Hero;
