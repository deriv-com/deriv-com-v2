import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { CardsContainer } from '@deriv-com/components';
import { PlatformBlockCardProps } from '../types';

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
        {header && (
          <Heading.H2 className="mx-auto max-w-[816px] text-center">
            {header}
          </Heading.H2>
        )}
        <CardsContainer variant={variant} cols={cols} cards={cards} />
        {description && <Text className="text-center">{description}</Text>}
      </FluidContainer>
    </Section>
  );
};

export default PlatformBlockCard;
