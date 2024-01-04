import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';

export interface ContentLessProps {
  title: React.ReactNode;
  description?: React.ReactNode;
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
        <div className="flex flex-col gap-gap-2xl">
          <Heading.H1 className="text-center">{title}</Heading.H1>
          {description && (
            <Text size="xl" className="text-center text-typography-default">
              {description}
            </Text>
          )}
        </div>

        {children && children}
      </FluidContainer>
    </Section>
  );
};

export default ContentLess;
