import { CardsContainer, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';

export interface NumbersWithTitleProps {
  title?: string;
  description?: string;
  cards: StatCardContent[];
}

export const NumbersWithTitle: React.FC<NumbersWithTitleProps> = ({
  cards,
  description,
  title,
}) => {
  return (
    <Section className=" bg-solid-slate-75 py-general-5xl">
      <FluidContainer className="flex flex-col items-center justify-center gap-gap-xl bg-solid-slate-75">
        {title && (
          <Heading.H2 className="text-solid-slate-1400">{title}</Heading.H2>
        )}
        {description && (
          <Text size="lg" className="text-solid-slate-1400">
            {description}
          </Text>
        )}
        <CardsContainer variant="StatCard" cards={cards} cols="four" />
      </FluidContainer>
    </Section>
  );
};

export default NumbersWithTitle;
