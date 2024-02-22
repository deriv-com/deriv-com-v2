import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import clsx from 'clsx';
import { HomeHeroProps } from '..';

const HomeHero = ({
  backgroundImage: BackgroundImage,
  title: Title,
  description,
  ctaButton: CTAButton,
  awards: Awards,
  heroImage: HeroImage,
  heroImageClass,
}: HomeHeroProps) => {
  return (
    <Section
      className={clsx(
        'relative isolate h-[calc(100vh-136px)] min-h-[587px] overflow-hidden',
      )}
    >
      {BackgroundImage}
      <FluidContainer
        className={
          'relative flex h-full flex-col justify-end sm:justify-center'
        }
      >
        <div className="z-20 flex flex-col max-sm:pt-general-2xl max-sm:text-center sm:w-[444px] lg:w-1/2">
          <Heading.H1 className="text-solid-slate-50">{Title}</Heading.H1>
          {description && (
            <Text className="pt-general-md text-solid-slate-50">
              {description}
            </Text>
          )}
          <div className="flex pt-general-2xl max-sm:justify-center max-sm:pb-general-2xl">
            {CTAButton}
          </div>
        </div>
        {Awards && (
          <div className="bottom-50 z-20 flex pb-general-xl max-sm:justify-center max-sm:pb-general-2xl sm:absolute">
            <div className="flex gap-gap-xl">{Awards}</div>
          </div>
        )}
      </FluidContainer>
      {HeroImage && <div className={heroImageClass}>{HeroImage}</div>}
      <div className="absolute inset-50 z-10 bg-gradient-hero-mobile sm:-z-10 sm:bg-gradient-hero"></div>
    </Section>
  );
};

export default HomeHero;
