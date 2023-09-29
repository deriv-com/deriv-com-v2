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
  const { onBlurHover, isBlurVisible, isDropContentOpen } = useNavigation();

  return (
    <div className={'fixed z-50 w-screen'}>
      <FixContainer className={'bg-background-primary-container'}>
        <FluidContainer
          className={clsx(
            isDropContentOpen ? 'max-h-[100vh]' : 'max-h-[72px]',
            'transition-max-height duration-1000 ease-in-out',
            'overflow-hidden',
          )}
        >
          {children}
        </FluidContainer>
      </FixContainer>
      {isBlurVisible && (
        <DesktopNavBlur isVisible={isDropContentOpen} onHover={onBlurHover} />
      )}
    </div>
  );
};

export default DesktopNavigationWrapper;
