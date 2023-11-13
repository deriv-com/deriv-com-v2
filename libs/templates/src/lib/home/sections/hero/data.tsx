import { OptimizedImage } from '@deriv-com/components';
import { Swiper, SwiperSlide } from 'swiper/react';
// TODO: remove this eslint-disable when we have a better solution
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Autoplay, EffectFade } from 'swiper';
import { ReactNode } from 'react';
import {
  Button,
  FacebookSocialButton,
  SocialAppleButton,
  SocialGoogleButton,
  Text,
  TextField,
} from '@deriv/quill-design';

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
    <div className={`flex flex-col gap-general-lg`}>
      <div className="flex flex-col items-center justify-between gap-gap-lg md:flex-row">
        <TextField placeholder="Email Address" type="email" />
        <Button size="lg" fullWidth>
          Open demo account
        </Button>
      </div>
      <Text>or sign up with</Text>
      <div className="flex flex-row items-center justify-between gap-general-sm sm:hidden">
        <SocialGoogleButton variant="secondary" fullWidth size="lg" hideLabel />
        <FacebookSocialButton
          variant="secondary"
          fullWidth
          size="lg"
          hideLabel
        />
        <SocialAppleButton variant="secondary" fullWidth size="lg" hideLabel />
      </div>
      <div className="hidden flex-row items-center justify-between gap-general-sm sm:flex">
        <SocialGoogleButton variant="secondary" fullWidth size="lg" />
        <FacebookSocialButton variant="secondary" fullWidth size="lg" />
        <SocialAppleButton variant="secondary" fullWidth size="lg" />
      </div>
    </div>
  );
};
