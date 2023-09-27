import { Heading, Text } from '@deriv/quill-design';
import clsx from 'clsx';
import { FeaturesProps } from '..';

const ContentLeft = ({
  title,
  className,
  description,
  content,
  image_content,
  variant = 'content-left',
}: FeaturesProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col bg-background-primary-container max-sm:gap-1200',
        'gap-1600 lg:gap-800',
        variant === 'content-left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
        className,
      )}
    >
      <div
        className={clsx(
          `flex flex-1 basis-1/2 flex-col max-sm:gap-1200 
        md:gap-1600 lg:justify-center lg:gap-2000`,
          variant === 'content-left' ? 'lg:pr-2400' : 'lg:pl-2400',
        )}
      >
        <div className="flex flex-col gap-1200 max-lg:gap-800">
          <Heading.H2>{title}</Heading.H2>
          {description && <Text>{description}</Text>}
        </div>
        {content && content}
      </div>
      <div className="flex flex-1 basis-1/2">
        {image_content && image_content}
      </div>
    </div>
  );
};

export default ContentLeft;
