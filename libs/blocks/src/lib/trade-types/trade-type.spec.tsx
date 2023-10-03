import { cleanup, render, screen } from '@testing-library/react';
import TradeTypeBlock from '.';
import { StatCardContent } from '@deriv-com/components';
import '@testing-library/jest-dom';

const homeStatData: StatCardContent[] = [
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

describe('TradeTypeBlock', () => {
  beforeEach(() => {
    render(
      <TradeTypeBlock
        cards={homeStatData}
        title="The title"
        description="The description"
        variant="StatCard"
      />,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render main title', () => {
    expect(
      screen.getByRole('heading', { name: 'The title', level: 2 }),
    ).toBeInTheDocument();
  });

  it('should render description', () => {
    expect(screen.getByText('The description')).toBeInTheDocument();
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
