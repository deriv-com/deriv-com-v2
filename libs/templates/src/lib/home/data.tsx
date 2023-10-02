import {
  CardContent,
  OptimizedImage,
  StatCardContent,
} from '@deriv-com/components';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
  SocialAppleIcon,
  SocialFacebookIcon,
  SocialGoogleIcon,
  LabelPairedCheckRegularIcon,
} from '@deriv/quill-icons';
import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import { Button, FluidContainer, Text } from '@deriv/quill-design';

export const homeStatData: StatCardContent[] = [
  {
    id: 0,
    color: 'dark',
    header: '$48M+',
    description: 'Monthly withdrawals',
  },
  {
    id: 1,
    color: 'white',
    header: '$650B+',
    description: 'Monthly volume',
  },
  {
    id: 2,
    color: 'dark',
    header: '168M+',
    description: 'Monthly deals',
  },
  {
    id: 3,
    color: 'coral',
    header: '300K+',
    description: 'Monthly active traders',
  },
];

export const heroItems: { key: string; image: ReactNode }[] = [
  {
    key: 'hero1',
    image: (
      <OptimizedImage
        imageName="home/features/hk_home_hero_1.png"
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
        imageName="home/features/hk_home_hero_2.png"
        alt="hero 2"
        fill
        priority
        className="object-cover max-lg:m-auto"
      />
    ),
  },
];

export const homeStatNumbers: StatCardContent[] = [
  {
    id: 0,
    header: '2.5M+',
    description: 'traders',
  },
  {
    id: 1,
    header: '20+ years',
    description: 'of experience',
  },
  {
    id: 2,
    header: '20B+',
    description: 'daily trades',
  },
  {
    id: 3,
    header: '50+',
    description: 'trading assets',
  },
  {
    id: 4,
    header: '0',
    description: 'commission',
  },
];

export const whyTradeWithUsData: CardContent[] = [
  {
    title: 'Trade diverse forex assets',
    description:
      'Trade over 50 forex pairs including major, minor, and exotic pairs',
    colorVariant: 'light',
    alignVariant: 'start',
    sizeVariant: 'md',
    link: {
      content: 'More on forex trading',
      href: '/',
    },
  },
  {
    title: 'Leveraged trading',
    description: 'Enjoy unbeatable spreads and speedy forex trades',
    colorVariant: 'light',
    alignVariant: 'start',
    sizeVariant: 'md',
    link: {
      content: 'More on forex trading',
      href: '/',
    },
  },
  {
    title: 'Powerful trading platform',
    description: 'The world’s favorite forex trading platform',
    colorVariant: 'light',
    alignVariant: 'start',
    sizeVariant: 'md',
    link: {
      content: 'More on forex trading',
      href: '/',
    },
  },
];

export const provenExcellenceData: CardContent[] = [
  {
    title: 'Protected and secure',
    description:
      'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
    icon: <IllustrativeProtectedAndSecureIcon />,
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
  },
  {
    title: '24/7 support',
    description:
      'Reach our professional, multilingual team anytime via live chat.',
    icon: <IllustrativeSupport247Icon />,
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
  },
  {
    title: 'Regulated',
    description:
      'We are licensed and overseen by leading global financial authorities.',
    icon: <IllustrativeLicensedAndRegulatedIcon />,
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
  },
  {
    title: 'Reliable',
    icon: <IllustrativeSpreadsIcon />,
    description:
      'With 99.97% uptime, we process 5.6 million trades daily, offering seamless and uninterrupted trading.',
    colorVariant: 'gray',
    alignVariant: 'start',
    sizeVariant: 'sm',
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

export const FastAndReliableContent = () => {
  return (
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
          Frankfurt, Cape Town, and Singapore for performance and reliability
        </Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">
          Diverse and proprietary mix of liquidity providers for optimal pricing
          and swift execution whenever you trade
        </Text>
      </li>
    </ul>
  );
};
