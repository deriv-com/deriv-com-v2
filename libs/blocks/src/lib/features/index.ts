import { ReactNode } from 'react';
import ContentLeft from './content-left';
import ContentRight from './content-right';
import CardFeature from './card-feature';
import CardSlider from './card-slider';

export interface FeaturesProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  cta?: ReactNode;
  className?: string;
  content?: ReactNode;
  image_content?: ReactNode;
  variant?: 'content-left' | 'content-right';
}

type FeatureVariants = {
  CardFeature: typeof CardFeature;
  ContentLeft: typeof ContentLeft;
  ContentRight: typeof ContentRight;
  CardSlider: typeof CardSlider;
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
Features.CardSlider = CardSlider;

export default Features;
