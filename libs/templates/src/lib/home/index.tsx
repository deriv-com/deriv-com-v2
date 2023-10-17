import { PageLayout } from '@deriv-com/components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import HeroBanner from './sections/hero';
import NumberSection from './sections/number-section';
import FastAndReliableSection from './sections/fast-and-reliable';
import WhyTradeSection from './sections/why-trade';
import ProvenExcellenceSection from './sections/proven-excellence';
import StaticNumberBlock from './sections/static-number-block';
import CardSliderSection from './sections/slider-section';
import FastPaymentSection from './sections/fast-payments';

export function HomeTemplate() {
  return (
    <PageLayout>
      <HeroBanner />
      <NumberSection />
      <FastAndReliableSection />
      <WhyTradeSection />
      <FastPaymentSection />
      <ProvenExcellenceSection />
      <CardSliderSection />
      <StaticNumberBlock />
    </PageLayout>
  );
}

export default HomeTemplate;
