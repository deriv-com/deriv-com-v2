import { render } from '@testing-library/react';

import WhoWeAre from '.';

describe('WhoWeAre', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhoWeAre />);
    expect(baseElement).toBeTruthy();
  });
});
