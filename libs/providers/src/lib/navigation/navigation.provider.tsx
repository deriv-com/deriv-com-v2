import { useCallback, useEffect, useMemo, useState } from 'react';
import { NavItem, NavLinkItems } from './types';
import { NavigationContext } from './navigation.context';

export interface NavigationProviderProps {
  children: React.ReactNode;
  navItems: NavLinkItems;
}

export interface NavDropStateType {
  type: 'menu' | 'lang';
  isOpen: boolean;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
  navItems,
}) => {
  const [activeMenu, setActiveMenu] = useState('none');
  const [navDropDownState, setNavDropDownState] = useState<NavDropStateType>({
    type: 'menu',
    isOpen: false,
  });
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // TODO: when we have backend logic and authentication, please update this
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onBlurHover = useCallback(() => {
    setNavDropDownState({
      ...navDropDownState,
      isOpen: false,
    });
  }, [navDropDownState]);

  const onItemHover = useCallback(
    (item: string) => {
      setNavDropDownState({
        ...navDropDownState,
        isOpen: false,
      });
      setActiveMenu('none');

      if (item === 'lang') {
        setNavDropDownState({
          type: 'lang',
          isOpen: true,
        });
      } else if (navItems[item]?.type === 'nav-dropdown') {
        setActiveMenu(item);
        setNavDropDownState({
          type: 'menu',
          isOpen: true,
        });
      }
    },
    [navItems, navDropDownState],
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
        navDropDownState,
        isMobileNavOpen,
        activeItem,
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
