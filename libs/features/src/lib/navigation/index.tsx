import { ReactNode } from 'react';
import MainNavigation from './main';
import MainRowNavigation from './main/man-navigation.row';

export type NavigationVariants = {
  Main: typeof MainNavigation;
  MainRow: typeof MainRowNavigation;
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

export default Navigation;
