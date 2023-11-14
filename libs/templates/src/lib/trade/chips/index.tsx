import { Chip } from '@deriv/quill-design';
import { TableDataType } from '../types/types';
import { additionalInfo, mainInfo, tradingCondition } from '../data/data';

export type ChipsPros = {
  onChangeChips: (value: TableDataType[]) => void;
  onChangeSelectedInfo: (value: string) => void;
};

const Chips = ({ onChangeChips, onChangeSelectedInfo }: ChipsPros) => {
  return (
    <>
      <Chip.Selectable
        className="hidden md:block lg:block"
        onChipSelect={() => {
          onChangeSelectedInfo('mainInfo');
          onChangeChips(mainInfo.data);
        }}
      >
        Main Info
      </Chip.Selectable>
      <Chip.Selectable
        className="hidden md:block lg:block"
        onChipSelect={() => {
          onChangeChips(tradingCondition.data);
          onChangeSelectedInfo('tradingCondition');
        }}
      >
        Trading conditions
      </Chip.Selectable>
      <Chip.Selectable
        className="hidden md:block lg:block "
        onChipSelect={() => {
          onChangeChips(additionalInfo.data);
          onChangeSelectedInfo('additionalInfo');
        }}
      >
        Additional info
      </Chip.Selectable>
    </>
  );
};

export default Chips;
