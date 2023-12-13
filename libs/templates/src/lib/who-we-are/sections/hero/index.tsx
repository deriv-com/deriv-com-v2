import { Hero } from '@deriv-com/blocks';
import { OptimizedImage } from '@deriv-com/components';
import Spline from '@splinetool/react-spline';

export const WhoWeAreHero = () => {
  return (
    <Spline scene="https://prod.spline.design/Y-0cdqopNabRR129/scene.splinecode" />

    // <Hero.ContentBottom title="Who we are">
    //   {/* <OptimizedImage
    //     imageName="who-we-are/hero/hk_who_we_are.png"
    //     className="rounded-xl"
    //     alt="Who we are"
    //     width={1232}
    //     height={711}
    //   /> */}
    //   <Spline scene="https://prod.spline.design/Y-0cdqopNabRR129/scene.splinecode" />
    // </Hero.ContentBottom>
  );
};

export default WhoWeAreHero;
