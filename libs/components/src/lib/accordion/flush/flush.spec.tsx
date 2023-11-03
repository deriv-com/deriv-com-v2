import { render } from '@testing-library/react';

import Flush from './index';

describe('Accordion - Flush Variant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Flush title="test" content={() => <>test</>} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
