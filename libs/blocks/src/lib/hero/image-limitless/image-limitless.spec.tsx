import { render } from '@testing-library/react';

import ImageLimitless from './index';

describe('ImageLimitless', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageLimitless title="" description="" />);
    expect(baseElement).toBeTruthy();
  });
});
