import { render } from '@testing-library/react';

import Fill from './index';

describe('Accordion - Fill Variant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Fill title="test" content={() => <>test</>} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
