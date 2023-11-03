import { render } from '@testing-library/react';

import { Elevate } from './index';

describe('Accordion - Elevate Variant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Elevate title="test" content={() => <>test</>} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
