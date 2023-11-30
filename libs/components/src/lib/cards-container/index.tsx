import { qtJoin, qtMerge } from '@deriv/quill-design';
import Card, { CardVariants } from '../card';
import styles from './styles.module.scss';

export type CardVariantType = keyof CardVariants;

export type CardVariantProps<T extends CardVariantType> =
  React.ComponentPropsWithoutRef<CardVariants[T]>;

export type CardsContainerCols = 'two' | 'three' | 'four' | 'five' | 'infinite';

export interface CardsContainerProps<T extends CardVariantType> {
  variant: T;
  cards: CardVariantProps<T>[];
  cols?: CardsContainerCols;
  dense?: boolean;
  className?: string;
}

const cardColsVariant: { [key in CardsContainerCols]: string } = {
  two: 'grid grid-cols-1 sm:grid-cols-2',
  three: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  four: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  five: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
  infinite: qtJoin(styles['slide-animation'], 'flex'),
};

export const CardsContainer = <T extends CardVariantType>({
  cards,
  cols = 'two',
  dense = false,
  variant,
  className,
}: CardsContainerProps<T>) => {
  const CardComponent = Card[variant];

  return (
    <div className="flex w-full overflow-hidden" id="cards-container">
      {cols === 'infinite' ? (
        <>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={qtMerge(
                'gap-gap-lg', // TODO: Add sm/md/lg/xl variants if needed
                cardColsVariant[cols],
                'pr-general-md',
                className,
              )}
              id="infinite-carousel"
            >
              {cards.map((card) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <CardComponent key={card.header} {...card} />
              ))}
            </div>
          ))}
        </>
      ) : (
        <div
          className={qtMerge(
            'gap-gap-lg', // TODO: we might need to add sm/md/lg/xl variants
            dense ? 'w-full lg:max-w-max' : 'w-full',
            cardColsVariant[cols],
            className,
          )}
        >
          {cards.map((card) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <CardComponent key={card.header} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
