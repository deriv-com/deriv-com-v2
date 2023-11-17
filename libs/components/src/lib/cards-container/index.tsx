import { qtMerge } from '@deriv/quill-design';
import Card, { CardVariants } from '../card';

export type CardVariantType = keyof CardVariants;

export type CardVariantProps<T extends CardVariantType> =
  React.ComponentPropsWithoutRef<CardVariants[T]>;

export type CardsContainerCols = 'two' | 'three' | 'four' | 'five';

export interface CardsContainerProps<T extends CardVariantType> {
  variant: T;
  cards: CardVariantProps<T>[];
  cols?: CardsContainerCols;
  dense?: boolean;
  className?: string;
}

const cardColsVariant: { [key in CardsContainerCols]: string } = {
  two: 'grid-cols-1 sm:grid-cols-2',
  three: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  four: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  five: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
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
    <div
      className={qtMerge(
        'grid',
        'gap-gap-lg', // TODO: we might need to add sm/md/lg/xl variants
        dense ? 'w-full lg:max-w-max' : 'w-full',
        cardColsVariant[cols],
        className,
      )}
    >
      {cards.map((card, index) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsContainer;
