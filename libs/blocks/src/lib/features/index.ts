import { ReactNode } from 'react';
import Card from './card';

export interface FeaturesProps {
  title?: string;
  description?: string;
  children: ReactNode;
  cta: ReactNode;
  className?: string;
}

type FeatureVariants = {
  Card: typeof Card;
};

export const Features: FeatureVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

Features.Card = Card;

export default Features;
