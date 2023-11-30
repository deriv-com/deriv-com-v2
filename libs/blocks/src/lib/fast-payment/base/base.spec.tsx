import { render } from '@testing-library/react';

import {
  FlagAndorraIcon,
  FlagAustraliaIcon,
  FlagBurkinaFasoIcon,
} from '@deriv/quill-icons/Flags';
import Base from './index';
import { CardContent } from '@deriv-com/components';

const title = 'Hassle-free deposits and withdrawals';
const desc = 'Make instant deposits from 10,000 HKD. Withdraw in minutes.';

const cards: CardContent[] = [
  {
    header: '',
    color: 'gray',
    align: 'center',
    size: 'lg',
    icon: <FlagBurkinaFasoIcon fill="black" iconSize="2xl" />,
    className: 'h-fit',
    nonContentClassName: 'p-general-xl',
  },
  {
    header: '',
    color: 'gray',
    align: 'center',
    size: 'lg',
    icon: <FlagAndorraIcon fill="black" iconSize="2xl" />,
    className: 'h-fit',
    nonContentClassName: 'p-general-xl',
  },
  {
    header: '',
    color: 'gray',
    align: 'center',
    size: 'lg',
    icon: <FlagAustraliaIcon fill="black" iconSize="2xl" />,
    className: 'h-fit',
    nonContentClassName: 'p-general-xl',
  },
];

describe('FastPayment', () => {
  it('should render successfully', () => {
    const { baseElement, queryByText, container } = render(
      <Base
        title={title}
        description={desc}
        content={{
          className: 'h-fit',
          cards: cards,
        }}
      />,
    );

    expect(baseElement).toBeTruthy();
    expect(container.querySelector('h2')).toBeTruthy();
    expect(queryByText(title)).toBeTruthy();
    expect(queryByText(desc)).toBeTruthy();
    expect(document.getElementById('cards-container')).toBeTruthy();
  });

  //render without description
  it('renders with logo carousel', () => {
    const { container } = render(
      <Base
        title={title}
        content={{
          className: 'h-fit',
          cols: 'infinite',
          cards: cards,
        }}
      />,
    );

    expect(container.querySelector('h2')).toBeTruthy();
    expect(document.getElementById('fast-payment-description')).toBeNull();
    expect(document.getElementById('cards-container')).toBeTruthy();
    expect(document.getElementById('infinite-carousel')).toBeTruthy();
  });
});
