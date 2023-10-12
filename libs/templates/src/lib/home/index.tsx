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

export function HomeTemplate() {
  return (
    <PageLayout>
      <HeroBanner />
      <NumberSection />
      <LiveMarketSection />
      <FastAndReliableSection />
      <WhyTradeSection />
      <ProvenExcellenceSection />
      <StaticNumberBlock />
    </PageLayout>
  );
}

export default HomeTemplate;
