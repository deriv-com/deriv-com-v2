import { Features } from '@deriv-com/blocks';
import { Card } from '@deriv-com/components';
import { whyTradeWithUsData } from './data';

const WhyTradeSection = () => {
  return (
    <Features.CardFeature
      title="Why trade forex with us "
      cols="three"
      rows="one"
      className="bg-solid-slate-75"
      cards={whyTradeWithUsData}
      renderCard={Card.ContentBottom}
    />
  );
};

export default WhyTradeSection;
