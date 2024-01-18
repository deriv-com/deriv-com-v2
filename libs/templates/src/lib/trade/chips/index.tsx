import { Chip } from '@deriv/quill-design';
import { TableDataType } from '../types/types';
import { additionalInfo, mainInfo, tradingCondition } from '../data/data';
import { useState } from 'react';

export type ChipsProps = {
  onChangeChips: (value: TableDataType[]) => void;
  onChangeSelectedInfo: (value: string) => void;
};

const Chips = ({ onChangeChips, onChangeSelectedInfo }: ChipsProps) => {
  const [selectedInfo, setSelectedInfo] = useState('mainInfo');

  return (
    <div className="flex gap-gap-md ">
      <Chip.Selectable
        onChipSelect={() => {
          onChangeSelectedInfo('mainInfo');
          setSelectedInfo('mainInfo');
          onChangeChips(mainInfo.data);
        }}
        selected={selectedInfo === 'mainInfo'}
      >
        <div className="w-max">Main Info</div>
      </Chip.Selectable>
      <Chip.Selectable
        onChipSelect={() => {
          onChangeChips(tradingCondition.data);
          onChangeSelectedInfo('tradingCondition');
          setSelectedInfo('tradingCondition');
        }}
        selected={selectedInfo === 'tradingCondition'}
      >
        <div className="w-max">Trading conditions</div>
      </Chip.Selectable>
      <Chip.Selectable
        onChipSelect={() => {
          onChangeChips(additionalInfo.data);
          onChangeSelectedInfo('additionalInfo');
          setSelectedInfo('additionalInfo');
        }}
        selected={selectedInfo === 'additionalInfo'}
      >
        <div className="w-max">Additional info</div>
      </Chip.Selectable>
    </div>
  );
};

export default Chips;
