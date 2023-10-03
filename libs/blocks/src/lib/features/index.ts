import { ReactNode } from 'react';
import ContentLeft from './content-left';
import ContentRight from './content-right';
import CardFeature from './card-content';

type FeatureVariants = {
  CardFeature: typeof CardFeature;
  ContentLeft: typeof ContentLeft;
  ContentRight: typeof ContentRight;
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

export default Features;
