import { ReactNode } from 'react';
import {
  CardContent,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';
import BlockWrapper from '../../block-wrapper';

export interface FeatureCardProps {
  title?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  className?: string;
  cards?: CardContent[];
  cols?: 'two' | 'three' | 'four';
  variant?: CardVariantType;
}

const Card = ({
  title,
  description,
  cta,
  className,
  cards = [],
  cols = 'two',
  variant = 'ContentBottom',
}: FeatureCardProps) => {
  return (
    <BlockWrapper
      title={title}
      description={description}
      className={className}
      background="light"
    >
      <CardsContainer
        variant={variant}
        cols={cols}
        cards={cards}
        className={cta ? 'py-general-2xl' : 'pt-general-2xl'}
      />
      {cta}
    </BlockWrapper>
  );
};

export default Card;
