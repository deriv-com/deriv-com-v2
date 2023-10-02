import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import HomeTemplate from '.';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeTemplate />, {
      wrapper: MemoryRouterProvider,
    });
    expect(baseElement).toBeTruthy();
  });
});
