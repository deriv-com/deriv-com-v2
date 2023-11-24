import {
  CardsContainer,
  CardsContainerCols,
  StatCardContent,
} from '@deriv-com/components';
import { FluidContainer, Section } from '@deriv/quill-design';
import clsx from 'clsx';

export interface NumbersOnlyProps {
  cards: StatCardContent[];
  className?: string;
  cols?: CardsContainerCols;
}

export const NumbersOnly: React.FC<NumbersOnlyProps> = ({
  cards,
  className,
  cols = 'five',
}) => {
  return (
    <Section className={clsx('bg-solid-slate-50 py-general-xl', className)}>
      <FluidContainer>
        <CardsContainer variant="StatCompany" cards={cards} cols={cols} />
      </FluidContainer>
    </Section>
  );
};

export default NumbersOnly;
