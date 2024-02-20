import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtJoin,
} from '@deriv/quill-design';
import clsx from 'clsx';
import { ContentLeftProps } from '../types';

// trigger deployment - 5
const ContentLeft = ({
  title,
  className,
  description,
  children,
  content: Content,
  variant = 'content-left',
  contentTop = false,
  contentPadding = true,
}: ContentLeftProps) => {
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
          variant === 'content-left' ? 'lg:flex-row-reverse' : 'lg:flex-row',
          'flex flex-col gap-gap-3xl px-general-none lg:gap-gap-lg',
          contentTop ? 'flex-col-reverse' : 'flex-col',
        )}
      >
        <div
          className={clsx(
            'flex flex-1 basis-1/2 flex-col gap-general-2xl px-general-md lg:justify-center lg:gap-gap-3xl lg:px-general-none',
            variant === 'content-left'
              ? 'lg:pl-general-xl'
              : 'lg:pr-general-2xl',
          )}
        >
          <div className="flex flex-col gap-gap-lg">
            <Heading.H2>{title}</Heading.H2>
            {description && <Text size="md">{description}</Text>}
          </div>
          {children && children}
        </div>
        {Content && (
          <div
            className={qtJoin(
              'flex flex-1 basis-1/2 justify-center',
              contentPadding && 'px-general-md lg:px-general-none',
            )}
          >
            <Content />
          </div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default ContentLeft;
