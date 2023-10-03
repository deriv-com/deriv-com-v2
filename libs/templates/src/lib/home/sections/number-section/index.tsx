import { StatBlock } from '@deriv-com/blocks';
import { homeStatNumbers } from './data';

const NumberSection = () => {
  return <StatBlock.NumbersOnly cards={homeStatNumbers} />;
};

export default NumberSection;
