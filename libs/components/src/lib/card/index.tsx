import { ReactNode } from 'react';
import StatCard from './stat';
import { ContentBottomCard } from './content-bottom';
import { ContentTopCard } from './content-top';
import { ContentLeftCard } from './content-left';
import { ContentRightCard } from './content-right';

export type CardVariants = {
  Stat: typeof StatCard;
  ContentBottom: typeof ContentBottomCard;
  ContentTop: typeof ContentTopCard;
  ContentLeft: typeof ContentLeftCard;
  ContentRight: typeof ContentRightCard;
};

export const Card: CardVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Card.Stat = StatCard;
Card.ContentBottom = ContentBottomCard;
Card.ContentTop = ContentTopCard;
Card.ContentLeft = ContentLeftCard;
Card.ContentRight = ContentRightCard;

export default Card;

export * from './types';
