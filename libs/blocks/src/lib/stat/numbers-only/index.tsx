import { Card, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Section } from '@deriv/quill-design';

export interface NumbersOnlyProps {
  cardsContent: StatCardContent[];
}

export const NumbersOnly: React.FC<NumbersOnlyProps> = ({ cardsContent }) => {
  return (
    <Section className="bg-solid-slate-50 py-general-2xl">
      <FluidContainer className="flex flex-col flex-wrap items-center justify-center gap-gap-xl  sm:flex-row">
        {cardsContent.map((cardItem) => (
          <Card.Stat
            key={cardItem.id}
            header={cardItem.header}
            description={cardItem.description}
            isOnlyNumbers
            className="basis-1/3 sm:basis-1/3 md:min-w-[180px] lg:flex-1"
          />
        ))}
      </FluidContainer>
    </Section>
  );
};

export default NumbersOnly;
