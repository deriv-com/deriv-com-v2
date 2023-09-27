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
          className="mx-800 my-general-lg"
          onClick={() => setActiveMenu?.('none')}
        />
      )}
      <LabelPairedXmarkRegularIcon
        onClick={toggleMobileNav}
        className="m-general-lg"
      />
    </div>
  );
};

export default MobileHeader;
