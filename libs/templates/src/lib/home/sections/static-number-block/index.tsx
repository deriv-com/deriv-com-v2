import { StatBlock } from '@deriv-com/blocks';
import { homeStatData } from './data';

const StaticNumberBlock = () => {
  return <StatBlock.NumbersWithTitle cardsContent={homeStatData} />;
};

export default StaticNumberBlock;
