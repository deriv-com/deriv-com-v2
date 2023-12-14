import clsx from 'clsx';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtJoin,
} from '@deriv/quill-design';
import { ReactNode } from 'react';
import {
  CardContent,
  CardVariantType,
  CardsContainer,
} from '@deriv-com/components';
import Base from '../base';

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
    <Base
      title={title}
      description={description}
      className={className}
      cta={cta}
    >
      <CardsContainer
        variant={variant}
        cols={cols}
        cards={cards}
        className={qtJoin(cta ? 'py-general-2xl' : 'pt-general-2xl')}
      />
    </Base>
  );
};

export default Card;
