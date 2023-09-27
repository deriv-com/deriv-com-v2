import { FluidContainer } from '@deriv/quill-design';
import NavMobileWrapper from './mobile.wrapper';
import MobileHeader from './mobile.header';
import MobileNavList from './mobile.nav-list';
import MobileNavContent from './mobile.nav-content';
import MobileLanguages from './mobile.languages';
import { NavigationProps } from '..';

export const MobileNav: React.FC<NavigationProps> = ({
  renderLogo,
  renderButtons,
}) => {
  return (
    <FluidContainer className="fixed w-screen bg-background-primary-container sm:hidden">
      <nav className="flex min-h-[72px] w-full flex-row items-center justify-between gap-gap-3xl">
        {renderLogo?.()}
        <NavMobileWrapper>
          <div className="flex h-full flex-col justify-between">
            <MobileHeader />
            <div className="relative flex flex-1 flex-col justify-between px-general-2xl">
              <MobileNavList />
              <MobileNavContent />
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
