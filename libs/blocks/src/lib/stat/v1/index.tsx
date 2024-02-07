import { CardsContainer } from '@deriv-com/components';
import { FluidContainer, Text } from '@deriv/quill-design';
import BlockWrapper from '../../block-wrapper';
import { V1StatBlockProps } from '../types';

export const V1StatBlock: React.FC<V1StatBlockProps> = ({
  cards,
  description,
  title,
}) => {
  return (
    <BlockWrapper background="light" title={title}>
      <FluidContainer>
        {description && (
          <Text className="pt-general-lg text-center">{description}</Text>
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
