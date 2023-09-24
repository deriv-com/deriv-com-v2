import { Heading, Text } from '@deriv/quill-design';
import { HeroProps } from '..';
import clsx from 'clsx';

const ContentBottom = ({
  className = '',
  title,
  description,
  children,
}: HeroProps) => {
  return (
    <div
      className={clsx(
        'md:px-1200 md:py-2000',
        'lg:py-4000',
        'flex w-full flex-col gap-2000 bg-background-primary-container px-800 py-2000',
        className,
      )}
    >
      <Heading.H1 className="flex w-full justify-center text-center lg:px-4000">
        {title}
      </Heading.H1>
      {description && (
        <Text size="xl" variant="regular" className="text-center">
          {description}
        </Text>
      )}
      <div className="flex w-full flex-1 justify-center lg:px-4000">
        {children}
      </div>
    </div>
  );
};

export default ContentBottom;
