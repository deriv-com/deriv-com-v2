import { ReactNode } from 'react';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import {
  CardContent,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';

export type PlatformBlockCardProps = {
  header?: string;
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
    <Section
      className={qtMerge(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col gap-gap-3xl">
        {header && <Heading.H2 className="text-center">{header}</Heading.H2>}
        <CardsContainer variant={variant} cols={cols} cards={cards} />
        {description && <Text className="text-center">{description}</Text>}
      </FluidContainer>
    </Section>
  );
};

export default PlatformBlockCard;
