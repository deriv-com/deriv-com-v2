import {
  CardVariantProps,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtJoin,
} from '@deriv/quill-design';

export interface TradeTypeBlockProps<T extends CardVariantType> {
  title: string;
  description?: string;
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
    <Section className="bg-background-primary-container py-general-4xl">
      <FluidContainer className="flex flex-col items-center justify-center">
        <Heading.H2
          className={qtJoin(description ? 'pb-gap-xl' : 'pb-gap-3xl')}
        >
          {title}
        </Heading.H2>
        {description && (
          <Text size="lg" className="pb-gap-3xl text-typography-default">
            {description}
          </Text>
        )}
        <CardsContainer
          variant={variant}
          cards={cards}
          cols={cols}
          dense={cols === 'two'}
        />
      </FluidContainer>
    </Section>
  );
};

export default TradeTypeBlock;
