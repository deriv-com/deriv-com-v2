import { createContext } from 'react';
import { NavItem, NavLinkItems } from './types';

export interface NavigationContextType {
  activeMenu: string;
  isDropContentOpen: boolean;
  isMobileNavOpen: boolean;
  activeItem?: NavItem;
  isBlurVisible: boolean;
  navItems: NavLinkItems;
  hasActiveMenu: boolean;
  onBlurHover?: VoidFunction;
  onListItemHover?: (navItemName: string) => void;
  toggleMobileNav?: VoidFunction;
  setActiveMenu?: (menuName: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  activeMenu: 'none',
  isDropContentOpen: false,
  isMobileNavOpen: false,
  isBlurVisible: false,
  hasActiveMenu: false,
  navItems: {},
  isLoggedIn: false,
});
