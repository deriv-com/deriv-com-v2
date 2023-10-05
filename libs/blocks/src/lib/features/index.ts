import { ReactNode } from 'react';
import ContentLeft from './content-left';
import ContentRight from './content-right';
import CardFeature from './card-feature';
import ContentSlider from './content-slider';

type FeatureVariants = {
  CardFeature: typeof CardFeature;
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

Features.CardFeature = CardFeature;
Features.ContentLeft = ContentLeft;
Features.ContentRight = ContentRight;
Features.ContentSlider = ContentSlider;

export default Features;
