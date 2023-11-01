import { ReactNode } from 'react';
import FooterBlock from './footer-block';
import { MainNavContent } from './main.nav.content';

type FooterVariants = {
  FooterBlock: typeof FooterBlock;
  MainNavContent: typeof MainNavContent;
};

export const Footer: FooterVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

Footer.FooterBlock = FooterBlock;
Footer.MainNavContent = MainNavContent;

export default Footer;

export * from './types';
