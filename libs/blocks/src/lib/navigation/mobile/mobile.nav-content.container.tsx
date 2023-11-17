import clsx from 'clsx';
import { useNavigation } from '@deriv-com/hooks';
import MobileNavContent from './mobile.nav-content';

export const MobileNavContentContainer = () => {
  const { hasActiveMenu } = useNavigation();

  return (
    <div
      className={clsx(
        hasActiveMenu && 'translate-x-50',
        'flex',
        'transition-all duration-500 ease-in-out',
        '-translate-x-full',
        'absolute',
        'h-full w-full',
        'bg-background-primary-container',
        'pb-general-lg',
        'px-1600',
        'left-50 top-50',
      )}
    >
      <MobileNavContent />
    </div>
  );
};

export default MobileNavContentContainer;
