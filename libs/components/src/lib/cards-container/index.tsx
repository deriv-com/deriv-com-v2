import { qtMerge } from '@deriv/quill-design';
import Card, { CardVariants } from '../card';
import {
  cardClass,
  cardContainer,
  colsClass,
} from './cards-container.classname';

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
  sliderClass,
}: CardsContainerProps<T>) => {
  const CardComponent = Card[variant];

  return (
    <div
      className={qtMerge(cardContainer({ cols: cols }), className)}
      data-testid="cards-container"
    >
      {cols === 'infinite' ? (
        Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={qtMerge(
              'flex animate-slide gap-gap-lg pr-general-md rtl:animate-slideRtl',
              sliderClass,
            )}
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
            dense: dense,
            justify: cards.length < columns[cols] ? 'center' : 'start',
            itemLessThanTwo: cards.length < 2,
          })}
        >
          {cards.map((card) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <CardComponent
              className={cardClass({ cols: cols })}
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
