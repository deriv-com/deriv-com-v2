import clsx from 'clsx';
import { FeaturesProps } from '..';
import { Heading, Text } from '@deriv/quill-design';

const CardContent = ({
  title,
  description,
  children,
  cta,
  className,
}: FeaturesProps) => {
  const content_classes = clsx(
    'lg:mt-2000',
    'md:mt-1600',
    'sm:mt-1200',
    'mt-1200 flex w-full items-center',
  );
  return (
    <div
      className={clsx(
        'lg:py-4000',
        'md:py-2000',
        'bg-background-primary-container',
        'flex flex-col items-center',
        'w-full',
        className,
      )}
    >
      <Heading.H2 className="max-lg:mb-800 lg:mb-1200">{title}</Heading.H2>
      <Text size="xl">{description}</Text>
      {children && <div className={content_classes}>{children}</div>}
      {cta && <div className={content_classes}>{cta}</div>}
    </div>
  );
};

export default CardContent;
