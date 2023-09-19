import { Heading } from '@deriv/quill-design';
import clsx from 'clsx';
import { HeroProps } from '..';

const ContentLimitless = ({
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
        className={clsx(
          'sm:flex-col',
          'md:flex-col',
          'lg:flex-row',
          'flex flex-col items-center'
        )}
      >
        <div
          className={clsx(
            'lg:pl-28 lg:pr-11',
            'md:pb-1600 md:px-6',
            'flex flex-1 flex-col px-4 justify-center'
          )}
        >
          {title_type === 'hero' && (
            <Heading.Hero className="pb-8">{title}</Heading.Hero>
          )}
          {title_type === 'h1' && (
            <Heading.H1 className="pb-8">{title}</Heading.H1>
          )}
          <p className="font-sans font-normal text-3xl text-opacity-600 text-400 pb-10">
            {description}
          </p>
          <div className="w-full">{children}</div>
        </div>
        <div className="flex flex-1">{content && content}</div>
      </div>
    </div>
  );
};

export default ContentLimitless;
