import clsx from 'clsx';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { CardsContainer } from '@deriv-com/components';
import { FeatureCardProps } from '../types';

const Card = ({
  title,
  description,
  cta,
  hasPadding,
  className,
  cards = [],
  cols = 'two',
  variant = 'ContentBottom',
  ...rest
}: FeatureCardProps) => {
  return (
    <Section
      className={qtMerge(
        hasPadding ? 'py-general-4xl' : 'py-general-xl',
        'bg-background-primary-container',
        className,
      )}
      {...rest}
    >
      <FluidContainer
        className={qtMerge(
          'flex flex-col items-center',
          (title || description) && 'gap-gap-3xl',
        )}
      >
        <div className="flex flex-col items-center justify-center gap-gap-lg">
          {title && (
            <Heading.H2 className="text-center lg:max-w-[816px]">
              {title}
            </Heading.H2>
          )}
          {description && (
            <Text size="md" className="text-center">
              {description}
            </Text>
          )}
        </div>
        <CardsContainer variant={variant} cols={cols} cards={cards} />
        {cta}
      </FluidContainer>
    </Section>
  );
};

export default Card;
