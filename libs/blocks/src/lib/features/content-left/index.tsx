import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { containerCVA, contentContainerCVA } from './content-left.classnames';

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
      <FluidContainer className={containerCVA({ variant })}>
        <div className={contentContainerCVA({ variant })}>
          <Heading.H2 className="pb-general-md">{title}</Heading.H2>
          {description && (
            <Text className="pb-general-2xl" data-testid="content-description">
              {description}
            </Text>
          )}
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
