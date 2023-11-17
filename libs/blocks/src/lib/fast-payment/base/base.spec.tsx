import { render } from '@testing-library/react';

import {
  FlagAndorraIcon,
  FlagAustraliaIcon,
  FlagBurkinaFasoIcon,
} from '@deriv/quill-icons/Flags';
import Base from './index';

const title = 'Hassle-free deposits and withdrawals';
const description =
  'Make instant deposits from 10,000 HKD. Withdraw in minutes.';

describe('FastPayment', () => {
  it('should render successfully', () => {
    const { baseElement, container, getByText } = render(
      <Base
        title="Hassle-free deposits and withdrawals"
        description="Make instant deposits from 10,000 HKD. Withdraw in minutes."
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

    // Check if the component renders at all
    expect(container.firstChild).toBeTruthy();

    // Check for the presence of the h2 element
    const h2Element = getByText(title);
    expect(h2Element).toBeTruthy();

    // Check for any other specific elements or content
    // Example: const someElement = getByTestId('someTestId');
    // expect(someElement).toBeInTheDocument();

    // Use debug to print the rendered HTML to the console
    console.log(container.innerHTML);
  });
});
