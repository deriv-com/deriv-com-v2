import { Hero } from '@deriv-com/blocks';
import { renderHomeHeroSliderContent, HomeHeroForm } from './data';

const HeroBanner = () => {
  return (
    <Hero.ContentLimitless
      title="Forex spreads from 0.3 pips"
      description="items in this hero banner are not fully styled yet, we need buttons, inputs and social buttons"
      content={renderHomeHeroSliderContent}
    >
      <HomeHeroForm />
    </Hero.ContentLimitless>
  );
};

export default HeroBanner;
