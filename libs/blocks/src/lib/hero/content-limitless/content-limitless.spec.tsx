import { render } from '@testing-library/react';

import ContentLimitless from './index';

describe('ContentLimitless', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ContentLimitless title="" description="" />
    );
    expect(baseElement).toBeTruthy();
  });
});
