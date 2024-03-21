import { FixContainer, FluidContainer } from '@deriv/quill-design';
import DesktopNavBlur from './desktop.blur';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { useNavigation } from '@deriv-com/hooks';

export const DesktopNavigationWrapper = ({
  topNav,
  children,
}: {
  topNav?: boolean;
  children: ReactNode;
}) => {
  const { navDropDownState } = useNavigation();

  return (
    <div
      className={'fixed z-50 w-screen max-w-[256rem]'}
      data-cy="desktop-header"
    >
      <FixContainer
        className={clsx(
          'bg-background-primary-container',
          navDropDownState.isOpen && 'shadow-330',
        )}
      >
        <FluidContainer
          className={clsx(
            !topNav
              ? navDropDownState.isOpen
                ? 'max-h-[100vh]'
                : 'max-h-[80px]'
              : 'max-h-max',
            'transition-max-height delay-0 duration-500 ease-in-out',
            'overflow-hidden',
          )}
        >
          {children}
        </FluidContainer>
      </FixContainer>
      {navDropDownState.isOpen && (
        <DesktopNavBlur isVisible={navDropDownState.isOpen} />
      )}
    </div>
  );
};

export default DesktopNavigationWrapper;
