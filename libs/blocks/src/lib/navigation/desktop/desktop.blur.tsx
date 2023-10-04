import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { useHover } from 'usehooks-ts';

export interface NavBlurProps {
  isVisible: boolean;
  onHover?: VoidFunction;
}

const DesktopNavBlur = ({ isVisible, onHover }: NavBlurProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isHovering = useHover(ref);

  useEffect(() => {
    if (isHovering) {
      onHover?.();
    }
  }, [isHovering, onHover]);

  return (
    <div
      className={clsx(
        'w-screen',
        'transition-all delay-0 duration-75 ease-in-out',
        {
          'block absolute h-screen backdrop-blur-lg': isVisible,
          'backdrop-blur-0 h-[72px]': !isVisible,
        },
      )}
      ref={ref}
    />
  );
};

export default DesktopNavBlur;
