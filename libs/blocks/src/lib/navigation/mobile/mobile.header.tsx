import { useNavigation } from '@deriv-com/hooks';
import { FluidContainer } from '@deriv/quill-design';
import { StandaloneChevronLeftRegularIcon } from '@deriv/quill-icons';

import { StandaloneXmarkRegularIcon } from '@deriv/quill-icons/Standalone';
import clsx from 'clsx';

export const MobileHeader = () => {
  const { hasActiveMenu, setActiveMenu, toggleMobileNav } = useNavigation();

  return (
    <FluidContainer
      className={clsx(
        'flex min-h-[80px] items-center py-general-lg',
        hasActiveMenu ? 'justify-between' : 'justify-end',
      )}
    >
      {hasActiveMenu && (
        <StandaloneChevronLeftRegularIcon
          className="cursor-pointer"
          onClick={() => setActiveMenu?.('none')}
        />
      )}
      <StandaloneXmarkRegularIcon
        className="cursor-pointer"
        onClick={toggleMobileNav}
      />
    </FluidContainer>
  );
};

export default MobileHeader;
