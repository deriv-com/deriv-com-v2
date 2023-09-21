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
          'lg:flex-row  lg:px-0 lg:pt-0 ',
          'md:px-1200',
          'flex',
          'items-center px-800',
          title_type === 'hero' ? 'flex-col' : 'flex-col-reverse pt-2000'
        )}
      >
        <div
          className={clsx(
            'lg:pr-3200 ',
            'pb-1600 lg:pb-0',
            'flex flex-1 flex-col'
          )}
        >
          {HeadingComponent && (
            <HeadingComponent className="pb-1600">{title}</HeadingComponent>
          )}

          <Text size="xl" variant="regular" className="pb-2000">
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
