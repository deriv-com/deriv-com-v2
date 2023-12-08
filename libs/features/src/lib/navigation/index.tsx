import { ReactNode } from 'react';
import MainNavigation from './main';
import MainRowNavigation from './main/man-navigation.row';
import PartnersNavigation from './others/partners';
import PrimeNavigation from './others/prime';
import AffiliatesNavigation from './others/affiliates';
import PaymentAgentNavigation from './others/payment-agent';
import DerivAPINavigation from './others/deriv-api';

export type NavigationVariants = {
  Main: typeof MainNavigation;
  MainRow: typeof MainRowNavigation;
  Partners: typeof PartnersNavigation;
  Prime: typeof PrimeNavigation;
  Affiliates: typeof AffiliatesNavigation;
  PaymentAgents: typeof PaymentAgentNavigation;
  DerivAPI: typeof DerivAPINavigation;
};

export const Navigation: NavigationVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

Navigation.Main = MainNavigation;
Navigation.MainRow = MainRowNavigation;
Navigation.Partners = PartnersNavigation;
Navigation.Prime = PrimeNavigation;
Navigation.Affiliates = AffiliatesNavigation;
Navigation.PaymentAgents = PaymentAgentNavigation;
Navigation.DerivAPI = DerivAPINavigation;

export default Navigation;
