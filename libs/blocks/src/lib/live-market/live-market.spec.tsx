import { render } from '@testing-library/react';

import LiveMarket from '.';

describe('LiveMarket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LiveMarket
        link={{
          href: '/',
          content: 'More forex',
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
