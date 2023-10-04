import { useNavigation } from '@deriv-com/hooks';
import { FluidContainer } from '@deriv/quill-design';
import {
  StandaloneChevronLeftRegularIcon,
  StandaloneXmarkRegularIcon,
} from '@deriv/quill-icons';
import clsx from 'clsx';

export const MobileHeader = () => {
  const { hasActiveMenu, setActiveMenu, toggleMobileNav } = useNavigation();

  return (
    <FluidContainer
      className={clsx(
        'flex min-h-[48px] items-center',
        hasActiveMenu ? 'justify-between' : 'justify-end',
      )}
    >
      {hasActiveMenu && (
        <StandaloneChevronLeftRegularIcon
          onClick={() => setActiveMenu?.('none')}
          iconSize="sm"
        />
      )}
      <StandaloneXmarkRegularIcon onClick={toggleMobileNav} iconSize="sm" />
    </FluidContainer>
  );
};

export default MobileHeader;
