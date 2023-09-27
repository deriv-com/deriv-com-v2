import clsx from 'clsx';
import { NavigationContent } from '../navigation.content';
import { useNavigation } from '@deriv-com/hooks';

export const MobileNavContent = () => {
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
        'py-general-xl',
        'px-1600',
        'left-50 top-50',
        'overflow-auto',
        'overscroll-y-auto',
      )}
    >
      <NavigationContent />
    </div>
  );
};

export default MobileNavContent;
