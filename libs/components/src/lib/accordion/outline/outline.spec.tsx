import { render } from '@testing-library/react';

import { Outline } from './index';

describe('Accordion - Outline Variant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Outline title="test" content={() => <>test</>} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
