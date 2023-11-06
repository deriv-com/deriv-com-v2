import { render } from '@testing-library/react';

import Footer from '.';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Footer
        navigationContent={() => <p>Navigation here</p>}
        descriptionContent={() => <p>Description here</p>}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
