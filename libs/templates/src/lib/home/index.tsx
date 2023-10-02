import { Hero, Features, StatBlock } from '@deriv-com/blocks';
import { Card, OptimizedImage, PageLayout } from '@deriv-com/components';
import { Text } from '@deriv/quill-design';
import {
  homeStatData,
  homeStatNumbers,
  whyTradeWithUsData,
  provenExcellenceData,
  renderHomeHeroSliderContent,
  HomeHeroForm,
  FastAndReliableContent,
} from './data';

import 'swiper/css';
import 'swiper/css/effect-fade';

export function HomeTemplate() {
  return (
    <PageLayout>
      <Hero.ContentLimitless
        title="Forex spreads from 0.3 pips"
        description="items in this hero banner are not fully styled yet, we need buttons, inputs and social buttons"
        content={renderHomeHeroSliderContent}
      >
        <HomeHeroForm />
      </Hero.ContentLimitless>

      <StatBlock.NumbersOnly cardsContent={homeStatNumbers} />

      <Features.ContentLeft
        title="Fast and reliable"
        content={<FastAndReliableContent />}
        image_content={
          <>
            <OptimizedImage
              className="block lg:hidden"
              imageName="home/hero/hk_homepage_feature_2.png"
              width={712}
              height={800}
              alt="home hero"
            />
            <OptimizedImage
              className="hidden lg:block"
              imageName="home/hero/hk_homepage_feature.png"
              width={712}
              height={800}
              alt="home hero"
            />
          </>
        }
      />

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

      <Features.CardFeature
        title="Why trade forex with us "
        cols="three"
        rows="one"
        className="bg-solid-slate-75"
        cards={whyTradeWithUsData}
        renderCard={Card.ContentBottom}
      />

      <Features.CardFeature
        title="20+ years of proven excellence"
        cols="four"
        rows="one"
        cards={provenExcellenceData}
        renderCard={Card.ContentBottom}
      />

      <StatBlock.NumbersWithTitle cardsContent={homeStatData} />

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
    </PageLayout>
  );
}

export default HomeTemplate;
