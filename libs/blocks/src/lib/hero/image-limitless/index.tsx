import { Heading } from '@deriv-com/quill-design';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ImageLimitlessProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

const ImageLimitless = ({
  title,
  description,
  image,
  className,
  children,
}: ImageLimitlessProps) => {
  return (
    <div
      className={clsx(
        'bg-core-solid-slate-50',
        'items-center',
        'w-full',
        className
      )}
    >
      <div className="flex">
        <div className="flex flex-col pt-core-4000 pb-core-4000 pl-core-1200 pr-core-1200">
          <Heading.Hero className="pb-8">{title}</Heading.Hero>
          <p className="font-sans text-core-400 font-normal text-3xl">
            {description}
          </p>
        </div>
        <div className="flex">{/* <img /> */}</div>
      </div>
    </div>
  );
};

export default ImageLimitless;
