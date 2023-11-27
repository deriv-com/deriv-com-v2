import { CardsContainer, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';

export interface V1StatBlockProps {
  title?: string;
  description?: string;
  cards: StatCardContent[];
}

export const V1StatBlock: React.FC<V1StatBlockProps> = ({
  cards,
  description,
  title,
}) => {
  return (
    <Section className="bg-solid-slate-75 py-general-4xl">
      <FluidContainer className="flex flex-col gap-gap-3xl bg-solid-slate-75">
        <div className="flex flex-col items-center gap-gap-lg text-center lg:gap-gap-xl">
          {title && <Heading.H2>{title}</Heading.H2>}
          {description && (
            <Text size="xl" className="text-typography-default">
              {description}
            </Text>
          )}
        </div>
        <CardsContainer variant="StatCard" cards={cards} cols="four" />
      </FluidContainer>
    </Section>
  );
};

export default V1StatBlock;
