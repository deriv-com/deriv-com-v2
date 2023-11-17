import { Hero } from '@deriv-com/blocks';
import { Breadcrumbs, OptimizedImage, PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';
import SearchSection from './sections/search';
import HelpCardSection from './sections/help-cards';

export function HelpCenterTemplate() {
  return (
    <PageLayout>
      <FluidContainer>
        <Breadcrumbs
          className="py-general-md"
          links={[
            {
              content: 'Home',
              href: '/',
            },
            {
              content: 'Help Centre',
              href: '/help-centre',
            },
          ]}
        />
        <Hero.ContentBottom title="How can we help?">
          <OptimizedImage
            imageName="help-centre/hero/help-centre-hero.png"
            className="rounded-pill"
            width={1232}
            height={526}
            alt="help centre hero"
          />
        </Hero.ContentBottom>
      </FluidContainer>
      <SearchSection />
      <HelpCardSection />
    </PageLayout>
  );
}

export default HelpCenterTemplate;
