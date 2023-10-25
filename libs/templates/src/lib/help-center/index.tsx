import { Hero } from '@deriv-com/blocks';
import { OptimizedImage, PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';
import QuestionCardSection from './sections/question-cards';

export function HelpCenterTemplate() {
  return (
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
      <QuestionCardSection />
    </PageLayout>
  );
}

export default HelpCenterTemplate;
