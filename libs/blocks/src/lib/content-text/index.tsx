import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ContentTextProps {
  title?: string;
  className?: string;
  content: ReactNode;
}

export const ContentText = ({
  title,
  className,
  content,
}: ContentTextProps) => {
  console.log(content);
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="lg:max-w-[816px]">
        <div className="flex flex-col gap-gap-xl">
          {title && <Heading.H2>{title}</Heading.H2>}
          <Text size="md">{content}</Text>
        </div>
      </FluidContainer>
    </Section>
  );
};

export default ContentText;
