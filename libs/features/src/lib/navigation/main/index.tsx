import { mainNavItems } from './data';
import { NavigationBlock } from '@deriv-com/blocks';
import MainNavigationLogo from './main-navigation.logo';
import MainNavigationButtons from './main-navigation.buttons';

export const MainNavigation = () => {
  return (
    <NavigationBlock
      items={mainNavItems}
      renderButtons={MainNavigationButtons}
      renderLogo={MainNavigationLogo}
    />
  );
};

export default MainNavigation;
