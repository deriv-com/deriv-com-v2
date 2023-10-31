import { render } from '@testing-library/react';

import { Hero } from '@deriv-com/blocks';
import { OptimizedImage, PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';

describe('HelpCenter', () => {
  it('should render successfully', () => {
    // Use router is not being mocked in jest thus we need to remove anything that is using it for now
    const { baseElement } = render(
      <PageLayout>
        <FluidContainer>
          <Hero.ContentTop title="How can we help?">
            <OptimizedImage
              imageName="help-centre/hero/help-centre-hero.png"
              className="rounded-pill"
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
