import { render } from '@testing-library/react';

import ContentLimit from './index';

describe('ContentLimit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentLimit />);
    expect(baseElement).toBeTruthy();
  });
});

describe('ContentLimit', () => {
  it('renders with the correct title font size', () => {
    const title = 'Title goes here';
    const fontSize = '2em';

    const { getByText } = render(<ContentLimit title={title} />);

    const titleElement = getByText(title);
    const computedStyle = window.getComputedStyle(titleElement);

    expect(computedStyle.fontSize).toBe(fontSize);
  });
});
