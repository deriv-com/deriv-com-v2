import { Hero } from '@deriv-com/blocks';
import { RenderHomeHeroSliderContent, HomeHeroForm } from './data';
import { qtJoin } from '@deriv/quill-design';
import styles from './styles.module.scss';

const HeroBanner = () => {
  return (
    <Hero.ContentLimitless
      title="Forex spreads from 0.3 pips"
      content={
        <>
          <div
            className={qtJoin(
              'absolute w-full h-full hidden lg:block',
              styles['desktop_big_red'],
            )}
          >
            <RenderHomeHeroSliderContent />
          </div>
          <div
            className={qtJoin(
              'absolute w-full h-full lg:hidden',
              styles['mobile_big_red'],
            )}
          >
            <RenderHomeHeroSliderContent />
          </div>
        </>
      }
    >
      <HomeHeroForm />
    </Hero.ContentLimitless>
  );
};

export default HeroBanner;
