import { Hero } from '@deriv-com/blocks';
import { OptimizedImage } from '@deriv-com/components';

export const WhoWeAreHero = () => {
  return (
    <Hero.ContentBottom title="Who we are">
      <OptimizedImage
        imageName="who-we-are/hero/hk_who_we_are.png"
        className="rounded-pill"
        alt="Who we are"
        width={1232}
        height={711}
      />
    </Hero.ContentBottom>
  );
};

export default WhoWeAreHero;
