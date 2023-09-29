import { cleanup, render, screen } from '@testing-library/react';
import NumbersWithTitle from '.';
import { StatCardContent } from '@deriv-com/components';
import '@testing-library/jest-dom';

const homeStatData: StatCardContent[] = [
  {
    id: 0,
    color: 'dark',
    header: '$48M+',
    description: 'Monthly withdrawals',
  },
  {
    id: 1,
    color: 'white',
    header: '$650B+',
    description: 'Monthly volume',
  },
  {
    id: 2,
    color: 'dark',
    header: '168M+',
    description: 'Monthly deals',
  },
  {
    id: 3,
    color: 'coral',
    header: '300K+',
    description: 'Monthly active traders',
  },
];

describe('NumbersWithTitle', () => {
  beforeEach(() => {
    render(
      <NumbersWithTitle
        cardsContent={homeStatData}
        title="The title"
        description="The description"
      />,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render all the card headings', () => {
    homeStatData.forEach((cardItem) => {
      expect(
        screen.getByRole('heading', {
          name: cardItem.header,
        }),
      ).toBeInTheDocument();
    });

    expect.assertions(4);
  });

  it('should render all the card descriptions', () => {
    homeStatData.forEach((cardItem) => {
      expect(
        screen.getByRole('heading', {
          name: cardItem.description,
        }),
      ).toBeInTheDocument();
    });

    expect.assertions(4);
  });
});
