import { render } from '@testing-library/react';

import Blocks from './blocks';

describe('Blocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Blocks />);
    expect(baseElement).toBeTruthy();
  });
});
