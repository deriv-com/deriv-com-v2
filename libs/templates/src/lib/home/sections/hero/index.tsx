import { Hero } from '@deriv-com/blocks';
import { renderHomeHeroSliderContent, HomeHeroForm } from './data';

const HeroBanner = () => {
  return (
    <Hero.ContentLimitless
      title="Forex spreads from 0.3 pips"
      description="Enter your email to get a demo account."
      content={renderHomeHeroSliderContent}
    >
      <HomeHeroForm />
    </Hero.ContentLimitless>
  );
};

export default HeroBanner;
