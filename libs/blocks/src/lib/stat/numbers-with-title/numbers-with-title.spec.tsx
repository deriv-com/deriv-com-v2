import { render } from '@testing-library/react';
import NumbersWithTitle from '.';
import { StatCardContent } from '@deriv-com/components';

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
  it('should render successfully', () => {
    const { baseElement } = render(
      <NumbersWithTitle
        cardsContent={homeStatData}
        title="The title"
        description="The description"
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
