import { useNavigation } from '@deriv-com/hooks';
import {
  LabelPairedXmarkRegularIcon,
  StandaloneChevronLeftRegularIcon,
} from '@deriv/quill-icons';
import clsx from 'clsx';

export const MobileHeader = () => {
  const { hasActiveMenu, setActiveMenu, toggleMobileNav } = useNavigation();

  return (
    <div
      className={clsx(
        'flex min-h-[48px] items-center',
        hasActiveMenu ? 'justify-between' : 'justify-end',
      )}
    >
      {hasActiveMenu && (
        <StandaloneChevronLeftRegularIcon
          className="mx-general-lg"
          onClick={() => setActiveMenu?.('none')}
          width={24}
          height={24}
        />
      )}
      <LabelPairedXmarkRegularIcon
        onClick={toggleMobileNav}
        className="mx-general-lg"
        width={24}
        height={24}
      />
    </div>
  );
};

export default MobileHeader;
