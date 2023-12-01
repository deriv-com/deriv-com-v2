import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import { FluidContainer } from '@deriv/quill-design';
import { StandaloneChevronLeftRegularIcon } from '@deriv/quill-icons';

import { StandaloneXmarkRegularIcon } from '@deriv/quill-icons/Standalone';
import clsx from 'clsx';

export const MobileHeader = () => {
  const { hasActiveMenu, setActiveMenu, toggleMobileNav } = useNavigation();
  const { showMobileLanguages, setShowMobileLanguages } = useLanguageSwitcher();

  return (
    <FluidContainer
      className={clsx(
        'flex min-h-[80px] items-center py-general-lg',
        hasActiveMenu || showMobileLanguages
          ? 'justify-between'
          : 'justify-end',
      )}
    >
      {(hasActiveMenu || showMobileLanguages) && (
        <StandaloneChevronLeftRegularIcon
          className="cursor-pointer"
          onClick={() => {
            setActiveMenu?.('none');
            setShowMobileLanguages?.(false);
          }}
        />
      )}
      <StandaloneXmarkRegularIcon
        className="cursor-pointer"
        onClick={() => {
          setShowMobileLanguages?.(false);
          toggleMobileNav?.();
        }}
      />
    </FluidContainer>
  );
};

export default MobileHeader;
