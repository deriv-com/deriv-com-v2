import { ReactNode } from 'react';
import StatCard from './stat';

export type CardVariants = {
  Stat: typeof StatCard;
};

export const Card: CardVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Card.Stat = StatCard;

export default Card;

export * from './types';
