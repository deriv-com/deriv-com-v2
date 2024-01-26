import { FluidContainer, Section } from '@deriv/quill-design';
import { ReactNode } from 'react';
import clsx from 'clsx';
import Content from '../content';
export interface ContentLimitlessProps {
  title?: string;
  description?: string;
  content?: ReactNode;
  children?: ReactNode;
  className?: string;
}
const ContentLimitless: React.FC<ContentLimitlessProps> = ({
  title,
  description,
  content,
  children,
  className,
}) => {
  return (
    <Section
      // todo: we need 72px gap for desktop 48px gap for mobile and tablet
      className={clsx(
        'mx-auto flex max-w-[2048px] flex-col justify-center lg:min-h-[680px] lg:flex-row xl:min-h-screen',
        className,
      )}
      data-testid="limitless-section"
    >
      <FluidContainer className="my-auto flex items-center py-general-4xl lg:min-h-[680px] lg:flex-1 lg:justify-end xl:min-h-[860px]">
        <Content
          title={title}
          center={false}
          description={description}
          className="lg:max-w-[608px] lg:pr-general-2xl"
        >
          {children}
        </Content>
      </FluidContainer>
      {content && (
        <div className="relative max-lg:min-h-[100vw] lg:flex-1 lg:pl-general-md">
          {content}
        </div>
      )}
    </Section>
  );
};

export default ContentLimitless;
