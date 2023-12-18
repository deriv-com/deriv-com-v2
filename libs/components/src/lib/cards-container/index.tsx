import { qtMerge } from '@deriv/quill-design';
import Card, { CardVariants } from '../card';
import { cva } from 'class-variance-authority';
import { cardContainer, colsClass } from './cards-container.classname';

export type CardVariantType = keyof CardVariants;

export type CardVariantProps<T extends CardVariantType> =
  React.ComponentPropsWithoutRef<CardVariants[T]> & {
    id: number;
  };

export type CardsContainerCols = 'two' | 'three' | 'four' | 'five' | 'infinite';

export interface CardsContainerProps<T extends CardVariantType> {
  variant: T;
  cards: CardVariantProps<T>[];
  cols?: CardsContainerCols;
  dense?: boolean;
  className?: string;
  sliderClass?: string;
}

/**
 * * Important: The gap is currently set at 16px. If additional gap variants are introduced, make sure to update this value accordingly.
 */

const columns = {
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

export const CardsContainer = <T extends CardVariantType>({
  cards,
  cols = 'two',
  dense = false,
  variant,
  className,
  sliderClass = 'animate-slide',
}: CardsContainerProps<T>) => {
  const CardComponent = Card[variant];

  const div = cva('gap-gap-lg pr-general-md', {
    variants: {
      cols: {
        two: '',
        three: 'lg:basis-[calc((100%-16px*2)/3)]',
        four: 'lg:basis-[calc((100%-16px*3)/4)]',
        five: 'lg:basis-[calc((100%-16px*4)/5)]',
        infinite: 'flex',
      },
    },
    compoundVariants: [
      {
        cols: ['two', 'three', 'four', 'five'],
        className: 'basis-full sm:basis-[calc((100%-16px)/2)]',
      },
      {
        cols: ['infinite'],
        className: sliderClass,
      },
    ],
    defaultVariants: {
      cols: 'two',
    },
  });

  return (
    <div
      className={qtMerge(cardContainer({ cols: cols }), className)}
      data-testid="cards-container"
    >
      {cols === 'infinite' ? (
        Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={div({ cols: cols })}
            data-testid="infinite-carousel"
          >
            {cards.map((card) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <CardComponent key={card.id} {...card} />
            ))}
          </div>
        ))
      ) : (
        <div
          className={colsClass({
            dense,
            justify: cards.length < columns[cols] ? 'center' : 'start',
          })}
        >
          {cards.map((card) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <CardComponent
              className={div({ cols: cols })}
              key={card.id}
              {...card}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
