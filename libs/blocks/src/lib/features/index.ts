import { ReactNode } from 'react';
import Card from './card';
import ContentLeft from './content-left';
import ContentRight from './content-right';

export interface FeaturesProps {
  title?: string;
  description?: string | ReactNode;
  children?: ReactNode;
  cta?: ReactNode;
  className?: string;
  left_content?: ReactNode;
  right_content?: ReactNode;
  variant?: 'content-left' | 'content-right';
}

type FeatureVariants = {
  Card: typeof Card;
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

Features.Card = Card;
Features.ContentLeft = ContentLeft
Features.ContentRight = ContentRight

export default Features;
