import { useCallback, useEffect, useMemo, useState } from 'react';
import { NavItem, NavLinkItems } from './types';
import { NavigationContext } from './navigation.context';

export interface NavigationProviderProps {
  children: React.ReactNode;
  navItems: NavLinkItems;
}
export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
  navItems,
}) => {
  const [activeMenu, setActiveMenu] = useState('none');
  const [isDropContentOpen, setIsDropContentOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // TODO: when we have backend logic and authentication, please update this
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onBlurHover = useCallback(() => {
    setIsDropContentOpen(false);
  }, []);

  const onListItemHover = useCallback(
    (navItemName: string) => {
      if (navItems[navItemName].type === 'nav-dropdown') {
        setActiveMenu(navItemName);
        setIsDropContentOpen(true);
      } else {
        setActiveMenu('none');
        setIsDropContentOpen(false);
      }
    },
    [navItems],
  );

  const isBlurVisible = useMemo(() => {
    return (
      activeMenu !== 'none' && navItems[activeMenu].type === 'nav-dropdown'
    );
  }, [activeMenu, navItems]);

  const activeItem: NavItem | undefined = useMemo(() => {
    return navItems[activeMenu];
  }, [activeMenu, navItems]);

  const toggleMobileNav = useCallback(() => {
    setIsMobileNavOpen((prevState) => !prevState);
    setActiveMenu('none');
  }, []);

  const hasActiveMenu = useMemo(() => {
    return activeMenu !== 'none';
  }, [activeMenu]);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileNavOpen]);

  return (
    <NavigationContext.Provider
      value={{
        activeMenu,
        isDropContentOpen,
        isMobileNavOpen,
        activeItem,
        isBlurVisible,
        onBlurHover,
        onListItemHover,
        toggleMobileNav,
        navItems,
        setActiveMenu,
        hasActiveMenu,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
