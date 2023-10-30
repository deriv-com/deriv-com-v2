import { LiveMarket } from '@deriv-com/blocks';
import { LivePriceData } from './data';

const LiveMarketSection = () => {
  return (
    <LiveMarket
      className="bg-solid-slate-75"
      disclaimer="*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only."
      link={{ href: '/', content: 'See all forex pairs' }}
      cardSliderProps={{
        cards: LivePriceData,
        variant: 'LiveMarketCard',
        slideClasses: 'max-w-[286px]',
        swiperData: {
          spaceBetween: 16,
          breakpoints: {
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 'auto',
            },
          },
          pagination: undefined,
        },
      }}
    />
  );
};

export default LiveMarketSection;
