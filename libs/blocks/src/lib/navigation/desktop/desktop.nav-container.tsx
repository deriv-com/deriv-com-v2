import { useNavigation } from '@deriv-com/hooks';
import { FixContainer, FluidContainer } from '@deriv/quill-design';
import clsx from 'clsx';
import { ReactNode } from 'react';

export const DesktopNavContainer: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { isDropContentOpen } = useNavigation();

  return (
    <FixContainer className={'z-50 bg-background-primary-container'}>
      <FluidContainer
        className={clsx(
          isDropContentOpen ? 'max-h-[600px]' : 'max-h-[72px]',
          'transition-max-height duration-1000 ease-in-out',
          'overflow-hidden',
        )}
      >
        {children}
      </FluidContainer>
    </FixContainer>
  );
};

export default DesktopNavContainer;
