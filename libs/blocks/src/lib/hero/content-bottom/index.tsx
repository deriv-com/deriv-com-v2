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
        'md:py-2000 md:px-1200',
        'lg:py-4000',
        'w-full flex flex-col py-2000 px-800 bg-background-primary-container gap-2000',
        className
      )}
    >
      <Heading.H1 className="flex w-full justify-center lg:px-4000 text-center">
        {title}
      </Heading.H1>
      {description && (
        <Text size="xl" variant="regular" className="text-center">
          {description}
        </Text>
      )}
      <div className="w-full flex flex-1 lg:px-4000 justify-center">
        {children}
      </div>
    </div>
  );
};

export default ContentBottom;
