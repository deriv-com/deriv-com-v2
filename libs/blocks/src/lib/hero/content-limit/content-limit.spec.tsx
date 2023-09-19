import { render } from '@testing-library/react';

import ContentLimit from './index';

describe('ContentLimit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentLimit />);
    expect(baseElement).toBeTruthy();
  });
});
