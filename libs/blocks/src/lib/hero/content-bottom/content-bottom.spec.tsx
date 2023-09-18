import { render } from '@testing-library/react';

import ContentBottm from '.';

describe('ContentBottm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentBottm />);
    expect(baseElement).toBeTruthy();
  });
});
