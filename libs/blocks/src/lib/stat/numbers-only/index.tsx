import { CardsContainer, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Section } from '@deriv/quill-design';
import clsx from 'clsx';

export interface NumbersOnlyProps {
  cards: StatCardContent[];
  className?: string;
}

export const NumbersOnly: React.FC<NumbersOnlyProps> = ({
  cards,
  className,
}) => {
  return (
    <Section className={clsx('bg-solid-slate-50 py-general-2xl', className)}>
      <FluidContainer>
        <CardsContainer cardsVariant="StatCompany" cards={cards} cols="five" />
      </FluidContainer>
    </Section>
  );
};

export default NumbersOnly;
