import { StatBlock } from '@deriv-com/blocks';
import { homeStatData } from './data';

const StaticNumberSection = () => {
  return <StatBlock.NumbersWithTitle cards={homeStatData} />;
};

export default StaticNumberSection;
