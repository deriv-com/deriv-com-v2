import clsx from 'clsx';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtJoin,
} from '@deriv/quill-design';
import { ReactNode } from 'react';

export interface BaseCardProps {
  title?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  className?: string;
  children: ReactNode;
}

const Base = ({
  title,
  description,
  cta,
  className,
  children,
}: BaseCardProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center">
        {title && (
          <Heading.H2
            className={qtJoin(
              'text-center lg:max-w-[816px]',
              description && 'pb-general-md',
            )}
          >
            {title}
          </Heading.H2>
        )}
        {description && (
          <Text className="text-center" data-testid="card-description">
            {description}
          </Text>
        )}
        {children}
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default Base;
