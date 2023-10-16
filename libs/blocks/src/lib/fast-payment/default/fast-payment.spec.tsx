import { render } from '@testing-library/react';

import FastPayment from './index';

describe('FastPayment', () => {
  const child = () => <div>test</div>;
  it('should render successfully', () => {
    const { baseElement } = render(<FastPayment>{child}</FastPayment>);
    expect(baseElement).toBeTruthy();
  });
});
