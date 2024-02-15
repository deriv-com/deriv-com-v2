import { NavigationProps } from '..';
import DesktopNavigationWrapper from './desktop.wrapper';
import NavList from './desktop.nav-list';
import { useNavigation } from '@deriv-com/hooks';
import LanguageSwitcher from '../language-switcher';
import { Suspense, lazy } from 'react';

const DesktopNavigation = ({
  renderButtons,
  renderLogo,
  hasLanguageSwitch,
  topNavigation,
}: NavigationProps) => {
  const LazyNavigationContent = lazy(() =>
    import('../navigation.content').then(({ NavigationContent }) => ({
      default: NavigationContent,
    })),
  );

  const LazyLanguageContent = lazy(
    () => import('../language-switcher/language.content'),
  );

  const { activeMenu, navItems, activeItem, navDropDownState, onItemHover } =
    useNavigation();

  const showMenuContent =
    navDropDownState.isOpen && navDropDownState.type === 'menu';

  const showLangContent =
    navDropDownState.isOpen && navDropDownState.type === 'lang';

  const shouldRenderNavContent =
    activeMenu !== 'none' &&
    activeItem?.type === 'nav-dropdown' &&
    showMenuContent;

  return (
    <DesktopNavigationWrapper topNav={topNavigation !== undefined}>
      <div
        className="hidden lg:block"
        onMouseLeave={() => {
          onItemHover?.('');
        }}
      >
        <div onMouseEnter={() => onItemHover?.('')}>{topNavigation?.()}</div>
        <nav className="flex min-h-[80px] w-full flex-row items-center justify-between">
          <div className="xl:w-[272px]" onMouseEnter={() => onItemHover?.('')}>
            {renderLogo?.()}
          </div>
          <NavList items={navItems} />
          <div className="flex items-center gap-gap-md">
            <div onMouseEnter={() => onItemHover?.('')}>
              {renderButtons?.()}
            </div>
            {hasLanguageSwitch && <LanguageSwitcher />}
          </div>
        </nav>
        {shouldRenderNavContent && (
          <Suspense>
            <LazyNavigationContent />
          </Suspense>
        )}
        {showLangContent && (
          <Suspense>
            <LazyLanguageContent />
          </Suspense>
        )}
      </div>
    </DesktopNavigationWrapper>
  );
};

export default DesktopNavigation;
