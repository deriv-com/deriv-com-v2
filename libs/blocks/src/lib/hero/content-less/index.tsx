import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';

export interface ContentLessProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

const ContentLess = ({
  className,
  title,
  description,
  children,
}: ContentLessProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col gap-gap-3xl">
        <Heading.H1 className="text-center">{title}</Heading.H1>
        {description && (
          <Text size="xl" className="text-center">
            {description}
          </Text>
        )}
        {children}
      </FluidContainer>
    </Section>
  );
};

export default ContentLess;
