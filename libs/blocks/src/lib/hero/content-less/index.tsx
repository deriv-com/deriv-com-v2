import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';

export interface ContentLessProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const ContentLess = ({
  className,
  title,
  description,
  children,
}: ContentLessProps) => {
  return (
    <Section className={clsx('py-general-4xl', className)}>
      <FluidContainer className="flex flex-col gap-gap-3xl lg:px-general-none">
        <div className="flex flex-col gap-gap-lg">
          <Heading.H1 className="text-center">{title}</Heading.H1>
          {description && <Text className="text-center">{description}</Text>}
        </div>

        {children}
      </FluidContainer>
    </Section>
  );
};

export default ContentLess;
