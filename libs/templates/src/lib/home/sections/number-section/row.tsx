import { StatBlock } from '@deriv-com/blocks';
import { homeStatNumbersRow } from './data';

const NumberSectionRow = () => {
  return (
    <StatBlock.NumbersOnly
      cards={homeStatNumbersRow}
      cols="four"
      className="bg-background-secondary-container"
    />
  );
};

export default NumberSectionRow;
