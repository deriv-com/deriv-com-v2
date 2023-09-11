import { render } from '@testing-library/react';

import HelpCenterTemplate from '.';

describe('HelpCenter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelpCenterTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
