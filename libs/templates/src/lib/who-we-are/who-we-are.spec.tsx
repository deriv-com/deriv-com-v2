import { render } from '@testing-library/react';

import WhoWeAre from './index';

describe('WhoWeAre', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhoWeAre />);
    expect(baseElement).toBeTruthy();
  });
});
