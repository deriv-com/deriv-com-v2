import { ReactNode } from 'react';
import CardContent from './card-content';
import ContentLeft from './content-left';
import ContentRight from './content-right';

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
  CardContent: typeof CardContent;
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

Features.CardContent = CardContent;
Features.ContentLeft = ContentLeft
Features.ContentRight = ContentRight

export default Features;
