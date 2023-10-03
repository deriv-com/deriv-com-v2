import clsx from 'clsx';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { ReactNode } from 'react';
import { CardContent } from '@deriv-com/components';

export interface CardFeatureProps {
  title?: string;
  description?: string;
  cta?: ReactNode;
  className?: string;
  cards?: CardContent[];
  renderCard?: React.FC<CardContent>;
  rows?: 'one' | 'two';
  cols?: 'two' | 'three' | 'four';
}

const cardColsVariant = {
  two: 'grid-cols-1 sm:grid-cols-2',
  four: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  three: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
};

const cardRowsVariant = {
  one: 'grid-rows-1',
  two: 'grid-rows-2',
};

const CardFeature = ({
  title,
  description,
  cta,
  className,
  cards = [],
  renderCard,
  cols = 'two',
  rows = 'one',
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
          <Heading.H2>{title}</Heading.H2>
          <Text size="xl">{description}</Text>
        </div>
        <div
          className={clsx(
            'grid gap-gap-lg',
            cardColsVariant[cols],
            cardRowsVariant[rows],
            cols === 'two' && rows === 'one' ? 'max-w-max' : 'w-full',
          )}
        >
          {cards.map((card) => (
            <span key={card.title}>{renderCard?.(card)}</span>
          ))}
        </div>
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default CardFeature;
