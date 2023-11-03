import { FluidContainer, Heading, Text, Section } from '@deriv/quill-design';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface AccountComparisonProps {
  className?: string;
  title?: string;
  description?: string;
  content?: () => ReactNode;
}

export const AccountComparison = ({
  className,
  title,
  description,
  content: Content,
}: AccountComparisonProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-secondary-base',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-3xl">
        {(title || description) && (
          <div className="flex flex-col items-center gap-gap-lg text-center lg:gap-gap-xl">
            {title && <Heading.H2>{title}</Heading.H2>}
            {description && <Text>{description}</Text>}
          </div>
        )}
        {Content && <Content />}
      </FluidContainer>
    </Section>
  );
};

export default AccountComparison;
