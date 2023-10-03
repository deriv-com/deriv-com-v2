import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardsContainer from '.';
import { StatCardContent } from '../card/types';

const cards: StatCardContent[] = [
  {
    color: 'dark',
    header: '$48M+',
    description: 'Monthly withdrawals',
  },
  {
    color: 'white',
    header: '$650B+',
    description: 'Monthly volume',
  },
  {
    color: 'dark',
    header: '168M+',
    description: 'Monthly deals',
  },
  {
    color: 'coral',
    header: '300K+',
    description: 'Monthly active traders',
  },
];

describe('CardsContainer', () => {
  beforeEach(() => {
    render(<CardsContainer variant="StatCard" cards={cards} />);
  });
  cards.forEach((cardItem) => {
    it('should render the proper heading', () => {
      expect(
        screen.getByRole('heading', {
          name: cardItem.header,
          level: 3,
        }),
      ).toBeInTheDocument();
    });

    it('should render the proper description', () => {
      expect(
        screen.getByRole('heading', { name: cardItem.description, level: 4 }),
      ).toBeInTheDocument();
    });
  });
});
