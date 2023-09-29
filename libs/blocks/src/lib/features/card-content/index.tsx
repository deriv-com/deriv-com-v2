import clsx from 'clsx';
import { FeaturesProps } from '..';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';

const CardContent = ({
  title,
  description,
  children,
  cta,
  className,
}: FeaturesProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-xl">
        <Heading.H2>{title}</Heading.H2>
        <Text size="xl">{description}</Text>
        {children}
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default CardContent;
