import { StatBlock } from '@deriv-com/blocks';
import { homeStatData } from './data';

const StaticNumberSection = () => {
  return <StatBlock.V1 cards={homeStatData} />;
};

export default StaticNumberSection;
