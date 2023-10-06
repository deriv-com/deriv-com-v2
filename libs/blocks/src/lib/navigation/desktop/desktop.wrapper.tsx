import { FixContainer, FluidContainer } from '@deriv/quill-design';
import DesktopNavBlur from './desktop.blur';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { useNavigation } from '@deriv-com/hooks';

export const DesktopNavigationWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isBlurVisible, isDropContentOpen } = useNavigation();

  return (
    <div className={'fixed z-50 w-screen'}>
      <FixContainer className={'bg-background-primary-container'}>
        <FluidContainer
          className={clsx(
            isDropContentOpen ? 'max-h-[100vh]' : 'max-h-[80px]',
            'transition-max-height delay-0 duration-500 ease-in-out',
            'overflow-hidden',
          )}
        >
          {children}
        </FluidContainer>
      </FixContainer>
      {isBlurVisible && <DesktopNavBlur isVisible={isDropContentOpen} />}
    </div>
  );
};

export default DesktopNavigationWrapper;
