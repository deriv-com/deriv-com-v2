import ContentLimit, { ContentLimitProps } from './content-limit';
import ContentLimitless, { ContentLimitlessProps } from './content-limitless';
import ContentBottom, { ContentBottomProps } from './content-bottom';
import ContentTop from './content-top';
import ContentLess, { ContentLessProps } from './content-less';
import { ReactNode } from 'react';

export {
  ContentLessProps,
  ContentLimitProps,
  ContentLimitlessProps,
  ContentBottomProps,
};
export interface HeroProps {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  children?: ReactNode;
}

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
