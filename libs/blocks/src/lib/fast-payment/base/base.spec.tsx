import { render, screen } from '@testing-library/react';
import Base from './index';
import { cards } from './data';

const title = 'Hassle-free deposits and withdrawals';
const desc = 'Make instant deposits from 10,000 HKD. Withdraw in minutes.';
const link = {
  content: 'testing',
  href: '/',
};

describe('FastPayment', () => {
  it('should render successfully', () => {
    const { baseElement, queryByText, container } = render(
      <Base
        title={title}
        description={desc}
        link={link}
        content={{
          className: 'h-fit',
          cards: cards.slice(0, 3),
        }}
      />,
    );

    expect(baseElement).toBeTruthy();
    expect(container.querySelector('h2')).toBeTruthy();
    expect(queryByText(title)).toBeTruthy();
    expect(queryByText(desc)).toBeTruthy();
    expect(screen.getByTestId('cards-container')).toBeTruthy();
    expect(screen.getByTestId('fast-payment-link')).toBeTruthy();
    expect(screen.getByTestId('fast-payment-description')).toBeTruthy();
  });

  //render without description
  it('renders with logo carousel', () => {
    const { container } = render(
      <Base
        title={title}
        content={{
          className: 'h-fit',
          cols: 'infinite',
          cards: cards.slice(0, 3),
        }}
      />,
    );

    expect(container.querySelector('h2')).toBeTruthy();
    expect(screen.queryByTestId('fast-payment-description')).toBeNull();
    expect(screen.queryByTestId('fast-payment-link')).toBeNull();
    expect(screen.getByTestId('cards-container')).toBeTruthy();
    expect(screen.queryAllByTestId('infinite-carousel')).toBeTruthy();
  });
});
