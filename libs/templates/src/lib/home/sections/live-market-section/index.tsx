import { LiveMarket } from '@deriv-com/blocks';
import { Card } from '@deriv-com/components';
import { SliderCardData } from './data';

const LiveMarketSection = () => {
  return (
    <LiveMarket
      className="bg-solid-slate-75"
      disclaimer="*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only."
      link={{ href: '/', content: 'More forex' }}
      cardSliderProps={{
        cards: SliderCardData,
        renderCard: Card.ContentBottom,
        slideClasses: 'max-w-xs',
      }}
    />
  );
};

export default LiveMarketSection;
