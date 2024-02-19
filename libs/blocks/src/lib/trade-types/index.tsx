import { ReactNode } from 'react';
import {
  CardVariantProps,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import BlockWrapper from '../block-wrapper';

export interface TradeTypeBlockProps<T extends CardVariantType> {
  title: ReactNode;
  description?: ReactNode;
  variant: T;
  cards: CardVariantProps<T>[];
  cols?: 'two' | 'three' | 'four';
}

export const TradeTypeBlock = <T extends CardVariantType>({
  title,
  description,
  variant,
  cards,
  cols = 'two',
}: TradeTypeBlockProps<T>) => {
  return (
    <BlockWrapper title={title} description={description} background="light">
      <FluidContainer>
        <CardsContainer
          variant={variant}
          cards={cards}
          cols={cols}
          dense={cols === 'two'}
          className="pt-general-2xl"
        />
      </FluidContainer>
    </BlockWrapper>
  );
};

export default TradeTypeBlock;
