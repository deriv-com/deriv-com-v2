import { ReactNode } from 'react';
import DesktopNavigation from './desktop';
import MobileNav from './mobile';
import { NavLinkItems, NavigationProvider } from '@deriv-com/providers';

export interface NavigationProps {
  renderButtons?: () => ReactNode;
  renderLogo?: () => ReactNode;
  items?: NavLinkItems;
  hasLanguageSwitch?: boolean;
}

export const NavigationBlock = ({
  renderButtons,
  renderLogo,
  items = {},
  hasLanguageSwitch = true,
}: NavigationProps) => {
  return (
    <NavigationProvider navItems={items}>
      {/* // TODO: add conditional rendering when we have useBreakpoints from quill-design */}
      <DesktopNavigation
        renderButtons={renderButtons}
        renderLogo={renderLogo}
        hasLanguageSwitch={hasLanguageSwitch}
      />
      <MobileNav
        renderButtons={renderButtons}
        renderLogo={renderLogo}
        hasLanguageSwitch={hasLanguageSwitch}
      />
    </NavigationProvider>
  );
};

export default NavigationBlock;
