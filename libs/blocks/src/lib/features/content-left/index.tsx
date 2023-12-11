import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface ContentLeftProps {
  title: ReactNode;
  className?: string;
  description?: ReactNode;
  content: React.FC;
  children: ReactNode;
  variant?: 'content-left' | 'content-right';
}

const ContentLeft = ({
  title,
  className,
  description,
  children,
  content: Content,
  variant = 'content-left',
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
          'flex flex-col gap-gap-xl lg:gap-gap-lg',
        )}
      >
        <div
          className={clsx(
            'flex flex-1 basis-1/2 flex-col gap-general-2xl lg:justify-center lg:gap-gap-3xl',
            variant === 'content-left'
              ? 'lg:pl-general-xl'
              : 'lg:pr-general-2xl',
          )}
        >
          <div className="flex flex-col gap-gap-lg">
            <Heading.H2>{title}</Heading.H2>
            {description && <Text size="md">{description}</Text>}
          </div>
          {children}
        </div>
        {Content && (
          <div className="flex flex-1 basis-1/2 justify-center">
            <Content />
          </div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default ContentLeft;
