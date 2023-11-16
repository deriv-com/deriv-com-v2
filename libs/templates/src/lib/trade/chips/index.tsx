import { Chip } from '@deriv/quill-design';
import { TableDataType } from '../types/types';
import { additionalInfo, mainInfo, tradingCondition } from '../data/data';
import { useState } from 'react';

export type ChipsPros = {
  onChangeChips: (value: TableDataType[]) => void;
  onChangeSelectedInfo: (value: string) => void;
};

const Chips = ({ onChangeChips, onChangeSelectedInfo }: ChipsPros) => {
  const [selectedInfo, setSelectedInfo] = useState('mainInfo');

  return (
    <>
      <Chip.Selectable
        className="hidden md:block lg:block"
        onChipSelect={() => {
          onChangeSelectedInfo('mainInfo');
          setSelectedInfo('mainInfo');
          onChangeChips(mainInfo.data);
        }}
        selected={selectedInfo === 'mainInfo'}
      >
        Main Info
      </Chip.Selectable>
      <Chip.Selectable
        className="hidden md:block lg:block"
        onChipSelect={() => {
          onChangeChips(tradingCondition.data);
          onChangeSelectedInfo('tradingCondition');
          setSelectedInfo('tradingCondition');
        }}
        selected={selectedInfo === 'tradingCondition'}
      >
        Trading conditions
      </Chip.Selectable>
      <Chip.Selectable
        className="hidden md:block lg:block "
        onChipSelect={() => {
          onChangeChips(additionalInfo.data);
          onChangeSelectedInfo('additionalInfo');
          setSelectedInfo('additionalInfo');
        }}
        selected={selectedInfo === 'additionalInfo'}
      >
        Additional info
      </Chip.Selectable>
    </>
  );
};

export default Chips;
