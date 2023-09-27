import { render } from '@testing-library/react';
import TradeTemplate from '.';

describe('WhoWeAre', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TradeTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
