import { Hero, Features } from '@deriv-com/blocks';
import { PageLayout } from '@deriv-com/components';
import { Text } from '@deriv/quill-design';
import 'swiper/css';
import 'swiper/css/effect-fade';
import HeroBanner from './sections/hero';
import NumberSection from './sections/number-section';
import FastAndReliableSection from './sections/fast-and-reliable';
import WhyTradeSection from './sections/why-trade';
import ProvenExcellenceSection from './sections/proven-excellence';
import StaticNumberBlock from './sections/static-number-block';

export function HomeTemplate() {
  return (
    <PageLayout>
      <HeroBanner />
      <NumberSection />
      <FastAndReliableSection />

      <Hero.ContentLimit
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
        content={() => (
          <img
            className="w-full"
            src="https://placehold.co/712x600"
            alt="Placeholder"
          />
        )}
      >
        <p>This is a content limit hero</p>
      </Hero.ContentLimit>

      <WhyTradeSection />

      <ProvenExcellenceSection />

      <StaticNumberBlock />

      <Hero.ContentTop title="Content Top">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentTop>

      <Hero.ContentBottom title="Content Bottom">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentBottom>

      <Hero.ContentLess
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
      >
        <Text className="text-center">This is a content less block</Text>
      </Hero.ContentLess>

      <Features.ContentRight
        title="Content Right Title"
        description="Description goes here description goes here description goes here description goes here"
        content={
          <div className="flex w-full">
            <Text>Any Content here</Text>
          </div>
        }
        image_content={
          <img
            className="flex w-full flex-1"
            src="https://placehold.co/712x800"
            alt="Placeholder"
          />
        }
      />
    </PageLayout>
  );
}

export default HomeTemplate;
