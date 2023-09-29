import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';

export interface ContentLimitlessProps {
  title?: string;
  description?: string;
  content?: () => ReactNode;
  children?: ReactNode;
}
const ContentLimitless: React.FC<ContentLimitlessProps> = ({
  title,
  description,
  content: Content,
  children,
}) => {
  return (
    <Section className="relative mx-auto flex max-w-[2048px] flex-col items-center justify-center gap-gap-2xl pt-general-2xl lg:block lg:min-h-[680px] xl:min-h-screen">
      <FluidContainer className="flex items-center lg:min-h-[680px] xl:min-h-[860px]">
        <div className="flex flex-col gap-gap-2xl lg:max-w-[580px]">
          {title && <Heading.Hero>{title}</Heading.Hero>}
          {description && <Text size="xl">{description}</Text>}
          {children}
        </div>
      </FluidContainer>
      {Content && (
        <>
          <div className="w-full before:absolute before:h-full before:w-full before:content-stretch before:bg-solid-coral-700 before:[clip-path:polygon(0_15%,100%_5%,100%_100%,0%_100%)] lg:hidden">
            <Content />
          </div>
          <div
            className={`absolute left-1/2 top-50 hidden h-full w-1/2 before:absolute before:h-full before:w-full before:content-stretch before:bg-solid-coral-700 before:[clip-path:polygon(37%_0,100%_0,100%_100%,15%_100%)] lg:block`}
          >
            <div className="absolute bottom-50 w-full">
              <Content />
            </div>
          </div>
        </>
      )}
    </Section>
  );
};

export default ContentLimitless;
