import clsx from 'clsx';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtJoin,
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
        {description && <Text className="text-center">{description}</Text>}
        <CardsContainer
          variant={variant}
          cols={cols}
          cards={cards}
          className={qtJoin(cta ? 'py-general-2xl' : 'pt-general-2xl')}
        />
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default Card;
