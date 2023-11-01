import { ReactNode } from 'react';
import MainFooter from './main';

export type FooterVariants = {
  Main: typeof MainFooter;
};

export const Footer: FooterVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

Footer.Main = MainFooter;

export default Footer;
