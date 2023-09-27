import { mainRowNavItems } from './data';
import { NavigationBlock } from '@deriv-com/blocks';
import MainNavigationLogo from './main-navigation.logo';
import MainNavigationButtons from './main-navigation.buttons';

export const MainRowNavigation = () => {
  return (
    <NavigationBlock
      items={mainRowNavItems}
      renderButtons={MainNavigationButtons}
      renderLogo={MainNavigationLogo}
    />
  );
};

export default MainRowNavigation;
