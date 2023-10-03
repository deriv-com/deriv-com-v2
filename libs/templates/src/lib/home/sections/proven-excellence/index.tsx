import { Features } from '@deriv-com/blocks';
import { Card } from '@deriv-com/components';
import { provenExcellenceData } from './data';

const ProvenExcellenceSection = () => {
  return (
    <Features.CardFeature
      title="20+ years of proven excellence"
      cols="four"
      rows="one"
      cards={provenExcellenceData}
      renderCard={Card.ContentBottom}
    />
  );
};

export default ProvenExcellenceSection;
