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
  const [isMenuContentOpen, setIsMenuContentOpen] = useState(false);
  const [isLangContentOpen, setIsLangContentOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // TODO: when we have backend logic and authentication, please update this
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onBlurHover = useCallback(() => {
    setIsMenuContentOpen(false);
    setIsLangContentOpen(false);
  }, []);

  useEffect(() => {
    isMenuContentOpen || isLangContentOpen
      ? setIsDropContentOpen(true)
      : setIsDropContentOpen(false);
  }, [isMenuContentOpen, isLangContentOpen]);

  const onItemHover = useCallback(
    (item: string) => {
      setIsLangContentOpen(false);
      setActiveMenu('none');
      setIsMenuContentOpen(false);

      if (item === 'lang') {
        setIsLangContentOpen(true);
      } else if (navItems[item]?.type === 'nav-dropdown') {
        setActiveMenu(item);
        setIsMenuContentOpen(true);
      }
    },
    [navItems],
  );

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
        isMenuContentOpen,
        isLangContentOpen,
        isMobileNavOpen,
        activeItem,
        // isBlurVisible,
        onBlurHover,
        onItemHover,
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
