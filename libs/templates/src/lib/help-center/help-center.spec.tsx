import { render } from '@testing-library/react';

import { OptimizedImage, PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';
import { Hero } from '@deriv-com/blocks';

describe('HelpCenter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PageLayout>
        <FluidContainer>
          <Hero.ContentTop title="How can we help?">
            <OptimizedImage
              imageName="help-centre/hero/hk_help_centre.png"
              className="rounded-xl"
              width={1232}
              height={526}
              alt="help centre hero"
            />
          </Hero.ContentTop>
        </FluidContainer>
      </PageLayout>,
    );
    expect(baseElement).toBeTruthy();
  });
});
