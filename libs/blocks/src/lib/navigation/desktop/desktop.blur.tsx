import { useNavigation } from '@deriv-com/hooks';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { useHover } from 'usehooks-ts';

export interface NavBlurProps {
  isVisible: boolean;
}

const DesktopNavBlur = ({ isVisible }: NavBlurProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { onBlurHover } = useNavigation();
  const isHovering = useHover(ref);

  useEffect(() => {
    if (isHovering) {
      onBlurHover?.();
    }
  }, [isHovering, onBlurHover]);

  return (
    <div
      className={clsx(
        'w-screen',
        'transition-all delay-0 duration-75 ease-in-out',
        {
          'block absolute h-screen backdrop-blur-lg': isVisible,
          hidden: !isVisible,
        },
      )}
      ref={ref}
    />
  );
};

export default DesktopNavBlur;
