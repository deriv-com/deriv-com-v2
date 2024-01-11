import { createContext } from 'react';
import { NavItem, NavLinkItems } from './types';

export interface NavigationContextType {
  activeMenu: string;
  isDropContentOpen: boolean;
  isMenuContentOpen: boolean;
  isLangContentOpen: boolean;
  isMobileNavOpen: boolean;
  activeItem?: NavItem;
  navItems: NavLinkItems;
  hasActiveMenu: boolean;
  onBlurHover?: VoidFunction;
  onItemHover?: (navItemName: string) => void;
  toggleMobileNav?: VoidFunction;
  setActiveMenu?: (menuName: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
  setIsDropContentOpen?: (isDropContentOpen: boolean) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  activeMenu: 'none',
  isDropContentOpen: false,
  isMenuContentOpen: false,
  isLangContentOpen: false,
  isMobileNavOpen: false,
  hasActiveMenu: false,
  navItems: {},
  isLoggedIn: false,
});
