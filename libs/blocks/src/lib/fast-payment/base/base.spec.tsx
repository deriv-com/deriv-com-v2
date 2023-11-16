import { render } from '@testing-library/react';
import {
  FlagAndorraIcon,
  FlagAustraliaIcon,
  FlagBurkinaFasoIcon,
} from '@deriv/quill-icons/Flags';
import Base from './index';

describe('FastPayment', () => {
  it('should render successfully', () => {
    const { queryByText } = render(
      <Base
        title="Hassle-free deposits and withdrawals"
        description="Make instant deposits from 10,000 HKD. Withdraw in minutes."
        link={{ content: 'Link Text', href: 'https://example.com' }}
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

    expect(
      queryByText('Hassle-free deposits and withdrawals'),
    ).toBeInTheDocument();
  });
});
