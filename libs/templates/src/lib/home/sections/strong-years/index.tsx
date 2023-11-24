import { Features } from '@deriv-com/blocks';
import { StrongYearsData } from './data';

const StrongYearsSection = () => (
  <Features.Card
    title="We’re 24+ years strong"
    cols="four"
    cards={StrongYearsData}
  />
);

export default StrongYearsSection;
