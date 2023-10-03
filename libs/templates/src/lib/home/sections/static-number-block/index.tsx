import { StatBlock } from '@deriv-com/blocks';
import { homeStatData } from './data';

const StaticNumberBlock = () => {
  return <StatBlock.NumbersWithTitle cards={homeStatData} />;
};

export default StaticNumberBlock;
