import { Heading, Text } from '@deriv/quill-design';
import clsx from 'clsx';
import { HeroProps } from '..';
import { twclsx } from '@deriv-com/utils';

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
        className={
          title_type === 'hero'
            ? twclsx(
                {
                  lg: 'items-center flex-row',
                },
                'flex flex-col'
              )
            : twclsx(
                {
                  lg: 'items-center flex-row',
                },
                'flex flex-col-reverse'
              )
        }
      >
        <div
          className={twclsx(
            {
              lg: 'pl-5000 pt-4000 pb-4000 pr-2400 ',
            },
            'flex flex-1 flex-col pt-2000 pb-2000 pl-800 pr-800'
          )}
        >
          {title_type === 'hero' && (
            <Heading.Hero className="pb-12">{title}</Heading.Hero>
          )}
          {title_type === 'h1' && (
            <Heading.H1 className="pb-8">{title}</Heading.H1>
          )}
          <Text size="lg" className="text-opacity-600 lg:pb-16 pb-10">
            {description}
          </Text>
          <div className="w-full">{children}</div>
        </div>
        <div className="flex flex-1">{content && content}</div>
      </div>
    </div>
  );
};

export default ContentLimitless;
