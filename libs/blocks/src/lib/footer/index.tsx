import { ReactNode } from 'react';
import FooterBlock from './footer-block';
import { MainNavContent } from './main.nav.content';
import FooterCTABlock from './footer-cta-block';

type FooterVariants = {
  FooterBlock: typeof FooterBlock;
  MainNavContent: typeof MainNavContent;
  CTABlock: typeof FooterCTABlock;
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
Footer.CTABlock = FooterCTABlock;

export default Footer;

export * from './types';
