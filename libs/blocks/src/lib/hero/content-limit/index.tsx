import React from 'react';
import Content from '../content';
import { FluidContainer, Section, qtMerge } from '@deriv/quill-design';
import clsx from 'clsx';

export interface ContentLimitProps {
  className?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

const ContentLimit: React.FC<ContentLimitProps> = ({
  title,
  description,
  content,
  className,
  children,
}) => {
  return (
    <Section
      className={qtMerge('relative py-general-4xl', className)}
      data-testid="content-limit-section"
    >
      <FluidContainer
        className={clsx(
          'lg:flex-row',
          'flex',
          'items-center',
          'flex-col-reverse',
        )}
      >
        <Content
          title={title}
          center={false}
          description={description}
          className="flex-1 max-lg:mt-general-2xl lg:pr-general-2xl"
        >
          {children}
        </Content>

        {content && (
          <div className="flex w-full flex-1 lg:ml-general-md">{content}</div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default ContentLimit;
