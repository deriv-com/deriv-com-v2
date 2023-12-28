import { ReactNode } from 'react';
import { CardsContainer, StatCardContent } from '@deriv-com/components';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import BlockWrapper from '../../block-wrapper';

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
    <BlockWrapper background="light" title={title}>
      <FluidContainer>
        {description && (
          <Text className="text-center pt-general-lg">{description}</Text>
        )}
        <CardsContainer
          variant="StatCard"
          cards={cards}
          cols="four"
          className={title || description ? 'pt-general-2xl' : undefined}
        />
      </FluidContainer>
    </BlockWrapper>
  );
};

export default V1StatBlock;
