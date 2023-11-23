import { Hero } from '@deriv-com/blocks';
import { OptimizedImage } from '@deriv-com/components';
import {
  Button,
  FluidContainer,
  Heading,
  Section,
  Text,
} from '@deriv/quill-design';

const HeroBannerRow = () => {
  return (
    <Section className="relative">
      <div className="absolute left-50 top-50 z-0 h-full w-full">
        <OptimizedImage
          className="h-full w-full"
          imageName="home/hero/row_home.png"
          alt="Hero"
          width={100}
          height={100}
        />
      </div>
      <FluidContainer className="relative z-10 flex">
        <div className="my-general-4xl flex h-[656px] w-full max-w-[712px] flex-col justify-center pr-general-2xl">
          <div className="flex flex-col gap-gap-3xl">
            <div className="flex flex-col gap-gap-md">
              <div className="flex flex-col">
                <Heading.H1 className="text-opacity-white-800">
                  Trading for anyone.
                </Heading.H1>
                <Heading.H1 className="text-opacity-white-800">
                  Anywhere. Anytime.
                </Heading.H1>
              </div>
              <Text size="md" className="pr-general-md text-opacity-white-800">
                Trade CFDs and Options on 1500+ instruments, all in one place
                with 24/7 trading and 24/7 worldwide support.
              </Text>
            </div>
            <Button size="lg" className="w-fit">
              Open demo account
            </Button>
          </div>
        </div>
        <div className="flex pt-general-lg">
          <OptimizedImage
            className="h-full w-full"
            imageName="home/hero/row_home_hero.png"
            alt="Hero image"
            width={576}
            height={787}
          />
        </div>
      </FluidContainer>
    </Section>
  );
};

export default HeroBannerRow;
