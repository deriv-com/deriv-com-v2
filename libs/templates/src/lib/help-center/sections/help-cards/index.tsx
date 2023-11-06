import { CardsContainer } from '@deriv-com/components';
import { FluidContainer, Section } from '@deriv/quill-design';
import { helpCardsData } from './data';

const HelpCardSection = () => {
  return (
    <Section className=" bg-solid-slate-75 py-general-4xl">
      <FluidContainer>
        <CardsContainer
          variant="ContentLeft"
          cards={helpCardsData}
          cols="three"
        />
      </FluidContainer>
    </Section>
  );
};

export default HelpCardSection;
