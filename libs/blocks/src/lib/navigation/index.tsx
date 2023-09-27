import { ReactNode } from 'react';
import DesktopNavigation from './desktop';
import MobileNav from './mobile';
import { NavLinkItems, NavigationProvider } from '@deriv-com/providers';

export interface NavigationProps {
  renderButtons?: () => ReactNode;
  renderLogo?: () => ReactNode;
  items?: NavLinkItems;
}

export const NavigationBlock = ({
  renderButtons,
  renderLogo,
  items = {},
}: NavigationProps) => {
  return (
    <NavigationProvider navItems={items}>
      {/* // TODO: add conditional rendering when we have useBreakpoints from quill-design */}
      <DesktopNavigation
        renderButtons={renderButtons}
        renderLogo={renderLogo}
      />
      <MobileNav renderButtons={renderButtons} renderLogo={renderLogo} />
    </NavigationProvider>
  );
};

export default NavigationBlock;
