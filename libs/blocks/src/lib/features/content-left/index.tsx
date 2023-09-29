import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
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
    <Section
      className={clsx(
        'bg-background-primary-container',
        'py-general-4xl',
        className,
      )}
    >
      <FluidContainer
        className={clsx(
          variant === 'content-left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
          'flex flex-col gap-gap-lg',
        )}
      >
        <div
          className={clsx(
            'flex flex-1 basis-1/2 flex-col gap-gap-xl lg:justify-center',
            variant === 'content-left'
              ? 'lg:pr-general-xl'
              : 'lg:pl-general-xl',
          )}
        >
          <div className="flex flex-col gap-gap-xl">
            <Heading.H2>{title}</Heading.H2>
            {description && <Text>{description}</Text>}
          </div>
          {content}
        </div>
        {image_content && (
          <div className="flex flex-1 basis-1/2">{image_content}</div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default ContentLeft;
