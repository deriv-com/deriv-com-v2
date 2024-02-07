import { CardsContainer } from '@deriv-com/components';
import { FluidContainer, Section } from '@deriv/quill-design';
import clsx from 'clsx';
import { V2StatBlockProps } from '../types';

export const V2StatBlock: React.FC<V2StatBlockProps> = ({
  cards,
  className,
}) => {
  return (
    <Section className={clsx('bg-solid-slate-50 py-general-xl', className)}>
      {/* This is to fix `Heading elements are not in a sequentially-descending order` */}
      <h2 className="sr-only">Stat Section</h2>
      <FluidContainer>
        <CardsContainer variant="StatCompany" cards={cards} cols="five" />
      </FluidContainer>
    </Section>
  );
};

export default V2StatBlock;
