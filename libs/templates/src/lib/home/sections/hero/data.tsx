import { OptimizedImage } from '@deriv-com/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import { ReactNode } from 'react';
import { Button, FluidContainer, Text } from '@deriv/quill-design';
import {
  SocialAppleIcon,
  SocialFacebookIcon,
  SocialGoogleIcon,
} from '@deriv/quill-icons';

export const heroItems: { key: string; image: ReactNode }[] = [
  {
    key: 'hero1',
    image: (
      <OptimizedImage
        imageName="home/hero/hk_home_hero_1.png"
        alt="hero 1"
        fill
        priority
        className="object-cover max-lg:m-auto"
      />
    ),
  },
  {
    key: 'hero2',
    image: (
      <OptimizedImage
        imageName="home/hero/hk_home_hero_2.png"
        alt="hero 2"
        fill
        priority
        className="object-cover max-lg:m-auto"
      />
    ),
  },
];

export const renderHomeHeroSliderContent = () => (
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
      <SwiperSlide
        className="min-h-[100vw] lg:max-h-[720px] lg:min-h-[580px] xl:min-h-[768px] 2xl:min-h-[860px]"
        key={slide.key}
      >
        {slide.image}
      </SwiperSlide>
    ))}
  </Swiper>
);

export const HomeHeroForm = () => {
  return (
    <FluidContainer className={`flex flex-col gap-general-lg pr-general-3xl`}>
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
  );
};
