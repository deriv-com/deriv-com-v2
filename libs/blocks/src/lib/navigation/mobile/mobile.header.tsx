import { useNavigation } from '@deriv-com/hooks';
import { FluidContainer, IconButton } from '@deriv/quill-design';
import { LabelPairedChevronLeftRegularIcon } from '@deriv/quill-icons/LabelPaired';

import { StandaloneXmarkRegularIcon } from '@deriv/quill-icons/Standalone';
import clsx from 'clsx';

export const MobileHeader = () => {
  const { hasActiveMenu, setActiveMenu, toggleMobileNav } = useNavigation();

  return (
    <FluidContainer
      className={clsx(
        'flex min-h-[80px] items-center py-general-md',
        hasActiveMenu ? 'justify-between' : 'justify-end',
      )}
    >
      {hasActiveMenu && (
        <IconButton
          colorStyle="black"
          onClick={() => setActiveMenu?.('none')}
          size="lg"
          variant="tertiary"
          icon={LabelPairedChevronLeftRegularIcon}
        />
      )}
      <StandaloneXmarkRegularIcon iconSize="md" onClick={toggleMobileNav} />
    </FluidContainer>
  );
};

export default MobileHeader;
