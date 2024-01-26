import { createContext } from 'react';
import { NavItem, NavLinkItems } from './types';
import { NavDropStateType } from '.';

export interface NavigationContextType {
  activeMenu: string;
  navDropDownState: NavDropStateType;
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
  navDropDownState: { type: 'menu', isOpen: false },
  isMobileNavOpen: false,
  hasActiveMenu: false,
  navItems: {},
  isLoggedIn: false,
});
