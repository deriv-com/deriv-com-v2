import { render } from '@testing-library/react';

import {
  FlagAndorraIcon,
  FlagAustraliaIcon,
  FlagBurkinaFasoIcon,
} from '@deriv/quill-icons/Flags';
import Base from './index';

const title = 'Hassle-free deposits and withdrawals';
const desc = 'Make instant deposits from 10,000 HKD. Withdraw in minutes.';

describe('FastPayment', () => {
  it('should render successfully', () => {
    const { baseElement, queryByText } = render(
      <Base
        title={title}
        description={desc}
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

    expect(queryByText(title)).toBeInTheDocument();
  });
});
