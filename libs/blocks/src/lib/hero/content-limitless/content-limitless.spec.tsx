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

describe('ContentLimitless', () => {
  it('renders with the correct title font size', () => {
    const title = 'Title goes here';
    const fontSize = '2em';

    const { getByText } = render(<ContentLimitless title={title} />);

    const titleElement = getByText(title);
    const computedStyle = window.getComputedStyle(titleElement);

    expect(computedStyle.fontSize).toBe(fontSize);
  });
});
