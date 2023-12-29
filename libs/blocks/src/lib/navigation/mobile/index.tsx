import { FluidContainer } from '@deriv/quill-design';
import NavMobileWrapper from './mobile.wrapper';
import MobileHeader from './mobile.header';
import MobileNavList from './mobile.nav-list';
import MobileNavContentContainer from './mobile.nav-content.container';
import { NavigationProps } from '..';
import MobileLanguageToggler from '../language-switcher/mobile-language';

export const MobileNav: React.FC<NavigationProps> = ({
  renderLogo,
  renderButtons,
  hasLanguageSwitch,
  topNavigation,
}) => {
  return (
    <FluidContainer
      className="fixed z-50 w-screen bg-background-primary-container lg:hidden"
      data-cy="mobile-header"
    >
      {topNavigation?.()}
      <nav className="flex min-h-[80px] w-full flex-row items-center justify-between md:gap-gap-3xl">
        {renderLogo?.()}
        <NavMobileWrapper>
          <div className="flex h-full flex-col justify-between">
            <MobileHeader />
            <div className="relative flex flex-1 flex-col justify-between px-general-2xl pb-general-lg sm:pb-general-md">
              <MobileNavList />
              <MobileNavContentContainer />
              {hasLanguageSwitch && <MobileLanguageToggler />}
            </div>
          </div>
        </NavMobileWrapper>
        {renderButtons?.()}
      </nav>
    </FluidContainer>
  );
};

export default MobileNav;
