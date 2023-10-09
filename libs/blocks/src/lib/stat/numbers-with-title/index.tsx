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
      <FluidContainer className="flex flex-col gap-gap-2xl bg-solid-slate-75">
        <div className="flex flex-col items-center gap-gap-xl text-center">
          {title && (
            <Heading.H2 className="text-solid-slate-1400">{title}</Heading.H2>
          )}
          {description && (
            <Text size="lg" className="text-solid-slate-1400">
              {description}
            </Text>
          )}
        </div>
        <CardsContainer variant="StatCard" cards={cards} cols="four" />
      </FluidContainer>
    </Section>
  );
};

export default NumbersWithTitle;
