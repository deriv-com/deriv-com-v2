import { ReactNode } from 'react';
import ContentLeft from './content-left';
import ContentRight from './content-right';
import Card from './card-feature';
import ContentSlider from './content-slider';
import FeaturesV4 from './features-v4';
import FeaturesV5 from './features-v5';

type FeatureVariants = {
  Card: typeof Card;
  ContentLeft: typeof ContentLeft;
  ContentRight: typeof ContentRight;
  ContentSlider: typeof ContentSlider;
  V4: typeof FeaturesV4;
  V5: typeof FeaturesV5;
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
Features.V4 = FeaturesV4;
Features.V5 = FeaturesV5;

export default Features;

export * from './types';
