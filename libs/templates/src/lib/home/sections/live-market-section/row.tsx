import { LiveMarket } from '@deriv-com/blocks';
import { LivePriceData } from './data';

const LiveMarketRowSection = () => {
  return (
    <LiveMarket
      header="Top trading assets & unique market indices"
      className="bg-background-primary-base"
      disclaimer={() => (
        <>
          <strong>Forex at your fingertips.</strong> Currency trading with
          major, minor, and exotic pairs.
        </>
      )}
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

export default LiveMarketRowSection;
