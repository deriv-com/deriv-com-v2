import { ReactNode } from 'react';
import ContentLeft from './content-left';
import ContentRight from './content-right';
import Card from './card-feature';
import ContentSlider from './content-slider';

type FeatureVariants = {
  Card: typeof Card;
  ContentLeft: typeof ContentLeft;
  ContentRight: typeof ContentRight;
  ContentSlider: typeof ContentSlider;
};

export const Features: FeatureVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

Features.Card = Card;
Features.ContentLeft = ContentLeft;
Features.ContentRight = ContentRight;
Features.ContentSlider = ContentSlider;

export default Features;
