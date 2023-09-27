import { Hero } from '@deriv-com/blocks';
import { OptimizedImage, PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';

export function WhoWeAreTemplate() {
  return (
    <PageLayout>
      <FluidContainer>
        <Hero.ContentBottom title="Who we are">
          <OptimizedImage
            imageName="who-we-are/hero/hk_who_we_are.png"
            className="rounded-pill"
            width={1232}
            height={711}
            alt="who we are hero"
          />
        </Hero.ContentBottom>
      </FluidContainer>
    </PageLayout>
  );
}

export default WhoWeAreTemplate;
