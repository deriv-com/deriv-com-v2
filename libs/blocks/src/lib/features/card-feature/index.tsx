import clsx from 'clsx';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { ReactNode } from 'react';
import {
  CardContent,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';

export interface FeatureCardProps {
  title?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  className?: string;
  cards?: CardContent[];
  cols?: 'two' | 'three' | 'four';
  variant?: CardVariantType;
}

const Card = ({
  title,
  description,
  cta,
  className,
  cards = [],
  cols = 'two',
  variant = 'ContentBottom',
}: FeatureCardProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer
        className={qtMerge(
          'flex flex-col items-center',
          (title || description) && 'gap-gap-3xl',
        )}
      >
        <div className="flex flex-col items-center justify-center gap-gap-lg">
          {title && (
            <Heading.H2 className="text-center lg:max-w-[816px]">
              {title}
            </Heading.H2>
          )}
          {description && (
            <Text size="md" className="text-center">
              {description}
            </Text>
          )}
        </div>
        <CardsContainer variant={variant} cols={cols} cards={cards} />
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default Card;
