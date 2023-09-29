import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { HeroProps } from '..';
import clsx from 'clsx';

const ContentBottom = ({
  className = '',
  title,
  description,
  children,
}: HeroProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col gap-gap-2xl">
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

export default ContentBottom;
