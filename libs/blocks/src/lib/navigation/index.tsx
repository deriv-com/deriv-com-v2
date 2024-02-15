import { ReactNode, Suspense, lazy } from 'react';
import { NavLinkItems, NavigationProvider } from '@deriv-com/providers';

export interface NavigationProps {
  renderButtons?: () => ReactNode;
  renderLogo?: () => ReactNode;
  items?: NavLinkItems;
  hasLanguageSwitch?: boolean;
  topNavigation?: () => ReactNode;
}

export const NavigationBlock = ({
  renderButtons,
  renderLogo,
  items = {},
  hasLanguageSwitch = true,
  topNavigation,
}: NavigationProps) => {
  const LazyDesktopNav = lazy(() => import('./desktop'));
  const LazyMobileNav = lazy(() => import('./mobile'));
  return (
    <NavigationProvider navItems={items}>
      {/* // TODO: add conditional rendering when we have useBreakpoints from quill-design */}
      <Suspense>
        <LazyDesktopNav
          renderButtons={renderButtons}
          renderLogo={renderLogo}
          hasLanguageSwitch={hasLanguageSwitch}
          topNavigation={topNavigation}
        />
        <LazyMobileNav
          renderButtons={renderButtons}
          renderLogo={renderLogo}
          hasLanguageSwitch={hasLanguageSwitch}
          topNavigation={topNavigation}
        />
      </Suspense>
    </NavigationProvider>
  );
};

export default NavigationBlock;
