import { useCallback, useMemo, useState } from 'react';
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

  const onBlurHover = useCallback(() => {
    if (activeMenu !== 'none') {
      setIsDropContentOpen(false);
    }
  }, [activeMenu]);

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
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
