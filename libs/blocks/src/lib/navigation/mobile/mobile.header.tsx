import { useNavigation } from '@deriv-com/hooks';
import { FluidContainer } from '@deriv/quill-design';
import {
  StandaloneChevronLeftRegularIcon,
  StandaloneXmarkRegularIcon,
} from '@deriv/quill-icons/Standalone';
import clsx from 'clsx';

export const MobileHeader = () => {
  const { hasActiveMenu, setActiveMenu, toggleMobileNav } = useNavigation();

  return (
    <FluidContainer
      className={clsx(
        'flex min-h-[80px] items-center py-800',
        hasActiveMenu ? 'justify-between' : 'justify-end',
      )}
    >
      {hasActiveMenu && (
        <StandaloneChevronLeftRegularIcon
          onClick={() => setActiveMenu?.('none')}
          iconSize="md"
        />
      )}
      <StandaloneXmarkRegularIcon onClick={toggleMobileNav} iconSize="md" />
    </FluidContainer>
  );
};

export default MobileHeader;
