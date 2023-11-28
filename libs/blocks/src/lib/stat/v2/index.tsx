import { CardsContainer, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Section } from '@deriv/quill-design';
import clsx from 'clsx';

export interface V2StatBlockProps {
  cards: StatCardContent[];
  className?: string;
}

export const V2StatBlock: React.FC<V2StatBlockProps> = ({
  cards,
  className,
}) => {
  return (
    <Section className={clsx('bg-solid-slate-50 py-general-xl', className)}>
      <FluidContainer>
        <CardsContainer variant="StatCompany" cards={cards} cols="five" />
      </FluidContainer>
    </Section>
  );
};

export default V2StatBlock;
