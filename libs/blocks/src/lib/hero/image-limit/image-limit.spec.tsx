import { render } from '@testing-library/react';

import ImageLimit from './index';

describe('ImageLimit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageLimit />);
    expect(baseElement).toBeTruthy();
  });
});
