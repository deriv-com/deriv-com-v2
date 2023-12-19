import { ReactNode } from 'react';
import { CardsContainer, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';

export interface V1StatBlockProps {
  title?: ReactNode;
  description?: ReactNode;
  cards: StatCardContent[];
}

export const V1StatBlock: React.FC<V1StatBlockProps> = ({
  cards,
  description,
  title,
}) => {
  return (
    <Section className="bg-solid-slate-75 py-general-4xl">
      <FluidContainer className="flex flex-col items-center bg-solid-slate-75">
        {title && (
          <Heading.H2 className={description ? 'pb-general-lg' : undefined}>
            {title}
          </Heading.H2>
        )}
        {description && (
          <Text size="md" className="text-center">
            {description}
          </Text>
        )}
        <CardsContainer
          variant="StatCard"
          cards={cards}
          cols="four"
          className={title || description ? 'pt-general-2xl' : undefined}
        />
      </FluidContainer>
    </Section>
  );
};

export default V1StatBlock;
