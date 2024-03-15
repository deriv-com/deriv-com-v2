import { useNavigation } from '@deriv-com/hooks';
import { qtMerge } from '@deriv/quill-design';
import { ReactNode } from 'react';

interface NavMobileWrapperProps {
  children: ReactNode;
  mobileWrapClass?: string;
}

export const NavMobileWrapper: React.FC<NavMobileWrapperProps> = ({
  children,
  mobileWrapClass,
}) => {
  const { isMobileNavOpen } = useNavigation();

  return (
    <div
      className={qtMerge(
        'absolute',
        'h-[100dvh] w-screen',
        'left-50 top-50',
        'bg-background-primary-container',
        '-translate-y-full transition-all duration-500 ease-in-out',
        isMobileNavOpen && 'translate-y-50',
        mobileWrapClass,
      )}
    >
      {children}
    </div>
  );
};

export default NavMobileWrapper;
