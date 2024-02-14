import ContentLimit from './content-limit';
import ContentLimitless from './content-limitless';
import ContentBottom from './content-bottom';
import ContentTop from './content-top';
import ContentLess from './content-less';
import { ReactNode } from 'react';

export type HeroBlockProps = {
  title?: ReactNode | string;
  description?: ReactNode | string;
  containerClassName?: string;
  content?: ReactNode;
  children?: ReactNode;
  className?: string;
};
export type HeroVariants = {
  ContentLimitless: typeof ContentLimitless;
  ContentLimit: typeof ContentLimit;
  ContentBottom: typeof ContentBottom;
  ContentTop: typeof ContentTop;
  ContentLess: typeof ContentLess;
};

export const Hero: HeroVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Hero.ContentLimitless = ContentLimitless;
Hero.ContentLimit = ContentLimit;
Hero.ContentBottom = ContentBottom;
Hero.ContentTop = ContentTop;
Hero.ContentLess = ContentLess;

export default Hero;
