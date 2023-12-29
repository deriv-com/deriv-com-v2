import { ReactNode } from 'react';
import { FluidContainer, Text } from '@deriv/quill-design';
import {
  CardContent,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';
import BlockWrapper from '../../block-wrapper';

export type PlatformBlockCardProps = {
  header?: ReactNode;
  description?: ReactNode;
  className?: string;
  cards?: CardContent[];
  cols?: 'two' | 'three' | 'four';
  variant?: CardVariantType;
};

const PlatformBlockCard = ({
  header,
  description,
  className,
  cards = [],
  cols = 'two',
  variant = 'ContentBottom',
}: PlatformBlockCardProps) => {
  return (
    <BlockWrapper className={className} background="light" title={header}>
      <FluidContainer className="pt-general-2xl">
        <CardsContainer variant={variant} cols={cols} cards={cards} />
        {description && (
          <Text className="text-center pt-general-xl">{description}</Text>
        )}
      </FluidContainer>
    </BlockWrapper>
  );
};

export default PlatformBlockCard;
