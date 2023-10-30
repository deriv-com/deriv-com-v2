import { Hero } from '@deriv-com/blocks';
import { Breadcrumbs, OptimizedImage, PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';

export function HelpCenterTemplate() {
  return (
    <PageLayout>
      <FluidContainer>
        <div className="flex py-general-md">
          <Breadcrumbs
            links={[
              {
                href: '/',
                content: 'Home',
              },
              {
                href: '/help-centre',
                content: 'Help Centre',
              },
              {
                href: '/asdasd',
                content: 'Other Page',
              },
              {
                href: '/asdasd',
                content: 'And another Page',
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
