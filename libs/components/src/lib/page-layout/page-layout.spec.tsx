import { render } from '@testing-library/react';

import PageLayout from '.';

describe('PageLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayout>test</PageLayout>);
    expect(baseElement).toBeTruthy();
  });
});
