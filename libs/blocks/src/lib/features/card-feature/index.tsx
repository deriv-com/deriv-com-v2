import clsx from 'clsx';
import { FluidContainer, Section } from '@deriv/quill-design';
import { ComponentProps, ReactNode } from 'react';
import {
  CardContent,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';
import BlockWrapper from '../../block-wrapper';

type SectionProps = Omit<ComponentProps<typeof Section>, 'title'>;

export type FeatureCardProps = SectionProps & {
  title?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  className?: string;
  cards?: CardContent[];
  cols?: 'two' | 'three' | 'four';
  variant?: CardVariantType;
  hasPadding?: boolean;
};

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
    <BlockWrapper
      className={clsx(
        hasPadding ? 'py-general-4xl' : 'py-general-xl',
        'bg-background-primary-container',
        className,
      )}
      background="light"
      title={title}
      description={description}
      {...rest}
    >
      <FluidContainer>
        <CardsContainer
          variant={variant}
          cols={cols}
          cards={cards}
          className={cta ? 'py-general-2xl' : 'pt-general-2xl'}
        />
        {cta}
      </FluidContainer>
    </BlockWrapper>
  );
};

export default Card;
