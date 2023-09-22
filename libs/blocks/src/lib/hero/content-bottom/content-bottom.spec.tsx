import { render } from '@testing-library/react';

import ContentBottom from '.';

describe('ContentBottom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentBottom />);
    expect(baseElement).toBeTruthy();
  });
});
