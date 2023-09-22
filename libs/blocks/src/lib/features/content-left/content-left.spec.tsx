import { render } from '@testing-library/react';

import ContentLeft from '.';

describe('ContentLeft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentLeft />);
    expect(baseElement).toBeTruthy();
  });
});
