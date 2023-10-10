import { Features } from '@deriv-com/blocks';
import { provenExcellenceData } from './data';

const ProvenExcellenceSection = () => {
  return (
    <Features.Card
      title="20+ years of proven excellence"
      cols="four"
      cards={provenExcellenceData}
    />
  );
};

export default ProvenExcellenceSection;
