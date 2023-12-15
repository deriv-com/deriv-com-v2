import { ReactNode } from 'react';
import DesktopNavigation from './desktop';
import MobileNav from './mobile';
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
  return (
    <NavigationProvider navItems={items}>
      {/* // TODO: add conditional rendering when we have useBreakpoints from quill-design */}
      <DesktopNavigation
        renderButtons={renderButtons}
        renderLogo={renderLogo}
        hasLanguageSwitch={hasLanguageSwitch}
        topNavigation={topNavigation}
      />
      <MobileNav
        renderButtons={renderButtons}
        renderLogo={renderLogo}
        hasLanguageSwitch={hasLanguageSwitch}
        topNavigation={topNavigation}
      />
    </NavigationProvider>
  );
};

export default NavigationBlock;
