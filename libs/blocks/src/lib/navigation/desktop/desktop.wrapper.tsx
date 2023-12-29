import { FixContainer, FluidContainer } from '@deriv/quill-design';
import DesktopNavBlur from './desktop.blur';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';

export const DesktopNavigationWrapper = ({
  topNav,
  children,
}: {
  topNav?: boolean;
  children: ReactNode;
}) => {
  const { isBlurVisible, isDropContentOpen } = useNavigation();
  const { showLangContent } = useLanguageSwitcher();

  return (
    <div className={'fixed z-50 w-screen'} data-cy="desktop-header">
      <FixContainer
        className={clsx(
          'bg-background-primary-container',
          isDropContentOpen || showLangContent ? 'shadow-330' : '',
        )}
      >
        <FluidContainer
          className={clsx(
            !topNav
              ? isDropContentOpen || showLangContent
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
      {(isBlurVisible || showLangContent) && (
        <DesktopNavBlur isVisible={isDropContentOpen || showLangContent} />
      )}
    </div>
  );
};

export default DesktopNavigationWrapper;
