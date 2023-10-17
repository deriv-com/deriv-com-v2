import { render } from '@testing-library/react';

import FastPayment from './index';
import {
  FlagAndorraIcon,
  FlagAustraliaIcon,
  FlagBurkinaFasoIcon,
} from '@deriv/quill-icons';

describe('FastPayment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FastPayment
        title="Hassle-free deposits and withdrawals"
        description="Make instant deposits from 10,000 HKD. Withdraw in minutes."
        link={{
          content: 'Learn More',
          href: '#',
        }}
        content={{
          className: 'h-fit',
          cards: [
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
          ],
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
