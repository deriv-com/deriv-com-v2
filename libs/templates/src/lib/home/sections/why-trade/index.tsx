import { Features } from '@deriv-com/blocks';
import { whyTradeWithUsData } from './data';

const WhyTradeSection = () => {
  return (
    <Features.Card
      title="Why trade forex with us "
      cols="three"
      className="bg-solid-slate-75"
      cards={whyTradeWithUsData}
    />
  );
};

export default WhyTradeSection;
