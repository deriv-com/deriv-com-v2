import { ReactNode } from 'react';
import StatCard from './stat-card';
import { ContentBottomCard } from './content-bottom';
import { ContentTopCard } from './content-top';
import { ContentLeftCard } from './content-left';
import { ContentRightCard } from './content-right';
import { StatCompanyCard } from './stat-company';

export type CardVariants = {
  StatCard: typeof StatCard;
  StatCompany: typeof StatCompanyCard;
  ContentBottom: typeof ContentBottomCard;
  ContentTop: typeof ContentTopCard;
  ContentLeft: typeof ContentLeftCard;
  ContentRight: typeof ContentRightCard;
};

export const Card: CardVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Card.StatCard = StatCard;
Card.StatCompany = StatCompanyCard;
Card.ContentBottom = ContentBottomCard;
Card.ContentTop = ContentTopCard;
Card.ContentLeft = ContentLeftCard;
Card.ContentRight = ContentRightCard;

export default Card;

export * from './types';
