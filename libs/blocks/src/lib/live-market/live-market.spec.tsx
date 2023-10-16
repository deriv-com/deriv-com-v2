import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import LiveMarket from '.';

describe('LiveMarket', () => {
  beforeEach(() => {
    render(
      <LiveMarket
        link={{
          href: '/',
          content: 'More forex',
        }}
        header="header here"
        isHeaderSection={true}
        disclaimer="Disclaimer here"
      />,
      {
        wrapper: MemoryRouterProvider,
      },
    );
  });

  it("should render the header 'header here'", () => {
    expect(
      screen.getByRole('heading', { name: 'header here', level: 2 }),
    ).toBeInTheDocument();
  });

  it('should render disclaimer successfully', () => {
    const disclaimer = screen.getByText('Disclaimer here');
    expect(disclaimer).toBeInTheDocument();
  });
});
