import { NavigationProps } from '..';
import DesktopNavigationWrapper from './desktop.wrapper';
import NavList from './desktop.nav-list';
import { NavigationContent } from '../navigation.content';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import LanguageSwitcher from '../language-switcher';
import LanguageContent from '../language-switcher/language.content';

const DesktopNavigation = ({ renderButtons, renderLogo }: NavigationProps) => {
  const { activeMenu, navItems, activeItem, isDropContentOpen } =
    useNavigation();
  const { showLangContent } = useLanguageSwitcher();

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
            <LanguageSwitcher />
          </div>
        </nav>
        {shouldRenderNavContent && isDropContentOpen && <NavigationContent />}
        {showLangContent && <LanguageContent />}
      </div>
    </DesktopNavigationWrapper>
  );
};

export default DesktopNavigation;
