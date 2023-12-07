import { render } from '@testing-library/react';
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
    expect(document.getElementById('cards-container')).toBeTruthy();
    expect(document.getElementById('fast-payment-link')).toBeTruthy();
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
    expect(document.getElementById('fast-payment-description')).toBeNull();
    expect(document.getElementById('fast-payment-link')).toBeNull();
    expect(document.getElementById('cards-container')).toBeTruthy();
    expect(document.getElementById('infinite-carousel')).toBeTruthy();
  });
});
