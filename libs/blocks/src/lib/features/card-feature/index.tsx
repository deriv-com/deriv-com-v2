import clsx from 'clsx';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';
import {
  CardContent,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';

export interface CardFeatureProps {
  title?: string;
  description?: string;
  cta?: ReactNode;
  className?: string;
  cards?: CardContent[];
  cols?: 'two' | 'three' | 'four';
  variant?: CardVariantType;
}

const CardFeature = ({
  title,
  description,
  cta,
  className,
  cards = [],
  cols = 'two',
  variant = 'ContentBottom',
}: CardFeatureProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center gap-gap-2xl">
        <div className="flex flex-col items-center justify-center gap-gap-xl">
          {title && <Heading.H2>{title}</Heading.H2>}
          {description && <Text size="xl">{description}</Text>}
        </div>
        <CardsContainer variant={variant} cols={cols} cards={cards} />
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default CardFeature;
