import { render } from '@testing-library/react';

import HomeTemplate from '.';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeTemplate title="Deriv" />);
    expect(baseElement).toBeTruthy();
  });
});
