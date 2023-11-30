import { PageLayout } from '@deriv-com/components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import HeroBanner from './sections/hero';
import NumberSection from './sections/number-section';
import FastAndReliableSection from './sections/fast-and-reliable';
import WhyTradeSection from './sections/why-trade';
import ProvenExcellenceSection from './sections/proven-excellence';
import StaticNumberBlock from './sections/static-number-block';
import LiveMarketSection from './sections/live-market-section';
import FastPaymentSection from './sections/fast-payments';
import ReviewSection from './sections/review';
import AccountSection from './sections/account-section';
import CTASection from './sections/cta';
import Spline from '@splinetool/react-spline';

export function HomeTemplate() {
  return (
    <PageLayout>
      <HeroBanner />
      <NumberSection />
      <LiveMarketSection />
      <FastAndReliableSection />
      <WhyTradeSection />
      {/* <Spline scene="https://prod.spline.design/5rFyk096jaOH7Cwi/scene.splinecode" /> */}
      <Spline scene="https://prod.spline.design/MwOkEXYoifLpV30y/scene.splinecode" />

      <AccountSection />
      <FastPaymentSection />
      <ReviewSection />
      <ProvenExcellenceSection />
      <StaticNumberBlock />
      <CTASection />
    </PageLayout>
  );
}

export default HomeTemplate;
