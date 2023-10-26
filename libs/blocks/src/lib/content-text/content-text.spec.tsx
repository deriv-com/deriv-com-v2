import { render } from '@testing-library/react';

import ContentText from '.';

describe('ContentText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentText content="testing" />);
    expect(baseElement).toBeTruthy();
  });
});
