import { FluidContainer, Heading, Text, Section } from '@deriv/quill-design';
import clsx from 'clsx';

export interface AccountComparisonProps {
  className?: string;
  title?: string;
  description?: string;
  content: React.FC;
}

const AccountComparison = ({
  className,
  title,
  description,
  content: Content,
}: AccountComparisonProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-xl lg:gap-gap-2xl">
        {(title || description) && (
          <div className="flex flex-col items-center gap-gap-lg lg:gap-gap-xl">
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
