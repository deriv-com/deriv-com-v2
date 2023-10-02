import { Hero, Features, StatBlock } from '@deriv-com/blocks';
import { OptimizedImage, PageLayout } from '@deriv-com/components';
import { Button, FluidContainer, Text } from '@deriv/quill-design';
import { homeStatData, heroItems, homeStatNumbers } from './data';
import {
  LabelPairedCheckRegularIcon,
  SocialAppleIcon,
  SocialFacebookIcon,
  SocialGoogleIcon,
} from '@deriv/quill-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function HomeTemplate() {
  return (
    <PageLayout>
      <Hero.ContentLimitless
        title="Forex spreads from 0.3 pips"
        description="items in this hero banner are not fully styled yet, we need buttons, inputs and social buttons"
        content={() => (
          <div className="">
            <Swiper
              speed={1500}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              effect={'fade'}
              fadeEffect={{
                crossFade: true,
              }}
              direction="horizontal"
              slidesPerView={1}
              modules={[Autoplay, EffectFade]}
              loop={true}
            >
              {heroItems.map((slide) => (
                <SwiperSlide key={slide.key}>{slide.image}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      >
        <FluidContainer className={`flex flex-col gap-general-lg`}>
          <div className="flex flex-col justify-between gap-gap-lg md:flex-row">
            <input
              placeholder="This component is not styled yet"
              className="rounded-2xl border-300 border-solid-red-600"
            />
            <Button size="lg" fullWidth>
              Create a demo account
            </Button>
          </div>
          <Text>or sign up with</Text>
          <div className="flex flex-row items-center justify-between gap-general-sm">
            <Button
              renderLeftIcon={() => <SocialGoogleIcon iconSize="sm" />}
              variant="tertiary"
              colorStyle="black"
              fullWidth
              className="rounded-800 border-75 border-solid-slate-300"
            >
              Google
            </Button>
            <Button
              renderLeftIcon={() => <SocialFacebookIcon iconSize="sm" />}
              variant="tertiary"
              colorStyle="black"
              fullWidth
              className="rounded-800 border-75 border-solid-slate-300"
            >
              Facebook
            </Button>
            <Button
              renderLeftIcon={() => <SocialAppleIcon iconSize="sm" />}
              variant="tertiary"
              colorStyle="black"
              fullWidth
              className="rounded-800 border-75 border-solid-slate-300"
            >
              Apple
            </Button>
          </div>
        </FluidContainer>
      </Hero.ContentLimitless>

      <StatBlock.NumbersOnly cardsContent={homeStatNumbers} />

      <Features.ContentLeft
        title="Fast and reliable"
        content={
          <ul className="flex max-w-[500px] flex-col gap-gap-xl">
            <li className="flex gap-gap-lg">
              <LabelPairedCheckRegularIcon
                className="min-w-[18px]"
                width={18}
                height={30}
              />
              <Text size="lg">Average execution speeds of under 50ms</Text>
            </li>
            <li className="flex gap-gap-lg">
              <LabelPairedCheckRegularIcon
                className="min-w-[18px]"
                width={18}
                height={30}
              />
              <Text size="lg">
                USD 20+ billion in daily trades from over 90,000+ daily clients
              </Text>
            </li>
            <li className="flex gap-gap-lg">
              <LabelPairedCheckRegularIcon
                className="min-w-[18px]"
                width={18}
                height={30}
              />
              <Text size="lg">
                99.97% uptime with intelligent routing to servers in London,
                Frankfurt, Cape Town, and Singapore for performance and
                reliability
              </Text>
            </li>
            <li className="flex gap-gap-lg">
              <LabelPairedCheckRegularIcon
                className="min-w-[18px]"
                width={18}
                height={30}
              />
              <Text size="lg">
                Diverse and proprietary mix of liquidity providers for optimal
                pricing and swift execution whenever you trade
              </Text>
            </li>
          </ul>
        }
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

      <StatBlock.NumbersWithTitle
        cardsContent={homeStatData}
        title="This is title"
        description="this is description"
      />

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

      <Features.CardContent
        title="Title goes here"
        description="Description goes here description goes here description goes here description goes here"
        cta={
          <div className="flex w-full justify-center">
            <Button>CTA</Button>
          </div>
        }
      >
        <Text className="text-center">Content will go here</Text>
      </Features.CardContent>

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
