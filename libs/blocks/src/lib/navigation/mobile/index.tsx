import { FluidContainer } from '@deriv/quill-design';
import NavMobileWrapper from './mobile.wrapper';
import MobileHeader from './mobile.header';
import MobileNavList from './mobile.nav-list';
import MobileNavContentContainer from './mobile.nav-content.container';
import MobileLanguages from './mobile.languages';
import { NavigationProps } from '..';

export const MobileNav: React.FC<NavigationProps> = ({
  renderLogo,
  renderButtons,
}) => {
  return (
    <FluidContainer className="fixed z-50 w-screen bg-background-primary-container md:hidden">
      <nav className="flex min-h-[80px] w-full flex-row items-center justify-between gap-gap-3xl">
        {renderLogo?.()}
        <NavMobileWrapper>
          <div className="flex h-full flex-col justify-between">
            <MobileHeader />
            <div className="relative flex flex-1 flex-col justify-between px-general-2xl pb-general-md">
              <MobileNavList />
              <MobileNavContentContainer />
              <MobileLanguages />
            </div>
          </div>
        </NavMobileWrapper>
        {renderButtons?.()}
      </nav>
    </FluidContainer>
  );
};

export default MobileNav;
