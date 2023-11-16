import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import '@testing-library/jest-dom';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import userEvent from '@testing-library/user-event';

import Link from '.';

describe('Link', () => {
  beforeEach(() => {
    render(<Link href="/who-we-are">link text</Link>, {
      wrapper: MemoryRouterProvider,
    });
  });
  it('should render successfully', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should have correct href', () => {
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/who-we-are');
  });

  it('should have correct text', () => {
    const link = screen.getByRole('link');

    expect(link).toHaveTextContent('link text');
  });

  // TODO: we have to find a way to fix this test by Providing shared link provider or mock useSharedLink
  it.skip('should navigate to the correct page', async () => {
    const link = screen.getByRole('link');

    await userEvent.click(link);

    expect(mockRouter.asPath).toBe('/who-we-are');
  });
});
