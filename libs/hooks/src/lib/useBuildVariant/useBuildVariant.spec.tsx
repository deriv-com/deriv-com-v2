import { renderHook } from '@testing-library/react';

import useBuildVariant from '.';

describe('useBuildVariant', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useBuildVariant());

    expect(result.current.buildVariant).toEqual('all');
  });
});
