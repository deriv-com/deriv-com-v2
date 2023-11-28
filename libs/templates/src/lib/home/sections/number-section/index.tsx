import { StatBlock } from '@deriv-com/blocks';
import { homeStatNumbers } from './data';

const NumberSection = () => {
  return <StatBlock.V2 cards={homeStatNumbers} />;
};

export default NumberSection;
