import { Heading, Text } from '@deriv/quill-design';
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
  const heading_components = {
    h1: Heading.H1,
    hero: Heading.Hero,
  };

  const HeadingComponent = heading_components[title_type];

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
          {HeadingComponent && (
            <HeadingComponent className="pb-8 md:pt-10 sm:pt-10">
              {title}
            </HeadingComponent>
          )}

          <Text size="xl" variant="regular" className="pb-10">
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
