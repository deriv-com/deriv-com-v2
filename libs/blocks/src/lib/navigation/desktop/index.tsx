import { NavigationProps } from '..';
import DesktopNavigationWrapper from './desktop.wrapper';
import NavList from './desktop.nav-list';
import { NavigationContent } from '../navigation.content';
import { useNavigation } from '@deriv-com/hooks';
import { FlagUnitedKingdomIcon } from '@deriv/quill-icons/Flags';
import { Text } from '@deriv/quill-design';

const DesktopNavigation = ({ renderButtons, renderLogo }: NavigationProps) => {
  const { activeMenu, navItems, activeItem } = useNavigation();
  const shouldRenderNavContent =
    activeMenu !== 'none' && activeItem?.type === 'nav-dropdown';

  return (
    <DesktopNavigationWrapper>
      <div className="hidden md:block">
        <nav className="flex min-h-[80px] w-full flex-row items-center justify-between">
          {renderLogo?.()}
          <NavList items={navItems} />
          <div className="flex items-center gap-gap-md">
            {renderButtons?.()}
            {/* // TODO: Implement Lang switcher when we have localization */}
            <div className="flex items-center gap-gap-sm">
              <FlagUnitedKingdomIcon
                className="inline"
                width={24}
                height={16}
              />
              <Text className="inline-block">EN</Text>
            </div>
          </div>
        </nav>
        {shouldRenderNavContent && <NavigationContent />}
      </div>
    </DesktopNavigationWrapper>
  );
};

export default DesktopNavigation;
