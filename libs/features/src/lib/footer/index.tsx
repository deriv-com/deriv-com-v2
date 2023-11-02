import { ReactNode } from 'react';
import MainFooter from './main';
import ROWFooter from './main/row.footer';

export type FooterVariants = {
  Main: typeof MainFooter;
  ROW: typeof ROWFooter;
};

export const Footer: FooterVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

Footer.Main = MainFooter;
Footer.ROW = ROWFooter;

export default Footer;
