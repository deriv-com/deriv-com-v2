import { render } from '@testing-library/react';

import Base from './index';

describe('Accordion - Base', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Base title="test" content={() => <>test</>} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
