import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';
import React from 'react';

export interface ContentLeftProps {
  title: string;
  className?: string;
  description?: string;
  content: React.FC;
  children: React.ReactNode;
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
          'flex flex-col gap-general-2xl lg:gap-general-md',
        )}
      >
        <div
          className={clsx(
            'flex flex-1 basis-1/2 flex-col gap-general-2xl lg:justify-center',
            variant === 'content-left'
              ? 'lg:pl-general-xl'
              : 'lg:pr-general-2xl',
          )}
        >
          <div className="flex flex-col gap-gap-xl">
            <Heading.H2>{title}</Heading.H2>
            {description && <Text>{description}</Text>}
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
