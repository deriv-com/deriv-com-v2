import { render } from '@testing-library/react';

import ContentLeft from '.';

describe('ContentRight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentLeft />);
    expect(baseElement).toBeTruthy();
  });
});
