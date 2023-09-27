import { renderHook } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import useCustomLink from './use-custom-link';

describe('useCustomLink', () => {
  it('should return no locale for en', () => {
    const { result } = renderHook(
      () =>
        useCustomLink({
          href: '/who-we-are',
        }),
      {
        wrapper: MemoryRouterProvider,
      },
    );

    expect(result.current).toBe('/who-we-are');
  });

  it('should have locale for other languages', () => {
    const { result } = renderHook(
      () =>
        useCustomLink({
          href: '/es/who-we-are',
        }),
      {
        wrapper: MemoryRouterProvider,
      },
    );

    expect(result.current).toBe('/es/who-we-are');
  });

  it("should have locale for other languages and don't add locale if it's already there", () => {
    const { result } = renderHook(
      () =>
        useCustomLink({
          href: '/es/who-we-are',
        }),
      {
        wrapper: MemoryRouterProvider,
      },
    );

    expect(result.current).toBe('/es/who-we-are');
  });

  it("should not add two locale subpaths if it's already there", () => {
    const { result } = renderHook(
      () =>
        useCustomLink({
          href: '/es/who-we-are',
          locale: 'es',
        }),
      {
        wrapper: MemoryRouterProvider,
      },
    );

    expect(result.current).toBe('/es/who-we-are');
  });
});
