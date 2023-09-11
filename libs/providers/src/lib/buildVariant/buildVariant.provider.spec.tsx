import { render } from '@testing-library/react';

import BuildVariantProvider from './buildVariant.provider';

describe('BuildVariantProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuildVariantProvider buildVariant="all" />);
    expect(baseElement).toBeTruthy();
  });
});
