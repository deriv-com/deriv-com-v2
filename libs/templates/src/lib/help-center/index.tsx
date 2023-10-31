import { Hero } from '@deriv-com/blocks';
import { Breadcrumbs, OptimizedImage, PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';

export function HelpCenterTemplate() {
  return (
    <PageLayout>
      <FluidContainer>
        <div className="py-general-md">
          <Breadcrumbs
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
        </div>
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
    </PageLayout>
  );
}

export default HelpCenterTemplate;
