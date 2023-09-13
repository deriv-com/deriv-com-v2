import { render } from '@testing-library/react';

import ImageLimitless from './image-limitless';

describe('ImageLimitless', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageLimitless />);
    expect(baseElement).toBeTruthy();
  });
});
