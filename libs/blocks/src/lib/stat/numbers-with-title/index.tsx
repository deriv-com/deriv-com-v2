import { Card, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';

export interface NumbersWithTitleProps {
  title?: string;
  description?: string;
  cardsContent: StatCardContent[];
}

export const NumbersWithTitle: React.FC<NumbersWithTitleProps> = ({
  cardsContent,
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
      </FluidContainer>
      <FluidContainer className="grid w-full grid-cols-1 gap-gap-lg pt-general-2xl md:grid-cols-2 lg:grid-cols-4">
        {cardsContent.map((cardItem) => (
          <Card.Stat key={cardItem.id} {...cardItem} className="flex-1" />
        ))}
      </FluidContainer>
    </Section>
  );
};

export default NumbersWithTitle;
