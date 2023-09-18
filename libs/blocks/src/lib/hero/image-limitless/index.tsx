import { Heading } from '@deriv/quill-design';
import clsx from 'clsx';
import { HeroProps } from '..';
import { twclsx } from '@deriv-com/utils';

const ImageLimitless = ({
  title,
  title_type = 'hero',
  description,
  content,
  className,
  children,
}: HeroProps) => {
  return (
    <div
      className={clsx(
        'bg-background-primary-container',
        'items-center',
        'w-full',
        className
      )}
    >
      <div
        className={twclsx(
          {
            lg: 'flex flex-row',
            md: 'flex flex-col',
            sm: 'flex flex-col',
          },
          'flex items-center '
        )}
      >
        <div
          className={twclsx(
            {
              lg: 'pt-4000 pb-4000 pr-3200',
              md: 'pt-2000 pl-1200 pr-1200 pb-1600',
            },
            'flex flex-1 flex-col pl-5000'
          )}
        >
          {title_type === 'hero' && (
            <Heading.Hero className="pb-8">{title}</Heading.Hero>
          )}
          {title_type === 'h1' && (
            <Heading.H1 className="pb-8">{title}</Heading.H1>
          )}
          <p className="font-sans font-normal text-3xl text-opacity-600 text-400  pb-10">
            {description}
          </p>
          <div className="w-full">{children}</div>
        </div>
        <div className="flex flex-1">{content && content}</div>
      </div>
    </div>
  );
};

export default ImageLimitless;
