import { useNavigation } from '@deriv-com/hooks';
import clsx from 'clsx';
import { ReactNode } from 'react';

export const NavMobileWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { isMobileNavOpen } = useNavigation();

  return (
    <div
      className={clsx(
        'absolute',
        'h-screen w-screen',
        'left-50 top-50',
        'bg-background-primary-container',
        '-translate-y-full transition-all duration-500 ease-in-out',
        isMobileNavOpen && 'translate-y-50',
      )}
    >
      {children}
    </div>
  );
};

export default NavMobileWrapper;
