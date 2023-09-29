import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import clsx from 'clsx';
import React from 'react';

export interface ContentLimitProps {
  className?: string;
  title?: string;
  description?: string;
  content?: () => React.ReactNode;
  children?: React.ReactNode;
}

const ContentLimit: React.FC<ContentLimitProps> = ({
  title,
  description,
  content: Content,
  className,
  children,
}) => {
  return (
    <Section
      className={qtMerge(
        'relative bg-background-primary-container py-general-4xl',
        className,
      )}
    >
      <FluidContainer
        className={clsx(
          'lg:flex-row',
          'flex',
          'items-center',
          'flex-col-reverse',
          'gap-gap-lg',
        )}
      >
        <div className={clsx('flex flex-1 flex-col gap-gap-2xl')}>
          <Heading.H1>{title}</Heading.H1>
          <Text size="xl" variant="regular">
            {description}
          </Text>
          <div className="w-full">{children}</div>
        </div>
        {Content && (
          <div className="flex flex-1">
            <Content />
          </div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default ContentLimit;
