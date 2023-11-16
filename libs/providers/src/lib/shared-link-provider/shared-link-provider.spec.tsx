import { render } from '@testing-library/react';
import { SharedLinkProvider } from '.';
import { SharedLink } from './types';

const MockLink: SharedLink = (props) => {
  return <a {...props} />;
};

describe('BuildVariantProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedLinkProvider DerivLink={MockLink}>
        <div></div>
      </SharedLinkProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
