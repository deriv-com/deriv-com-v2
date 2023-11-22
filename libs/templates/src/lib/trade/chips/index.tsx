import { Chip, qtMerge } from '@deriv/quill-design';
import { TableDataType } from '../types/types';
import { additionalInfo, mainInfo, tradingCondition } from '../data/data';
import { useState } from 'react';
import { Text } from '@deriv/quill-design';

export type ChipsProps = {
  onChangeChips: (value: TableDataType[]) => void;
  onChangeSelectedInfo: (value: string) => void;
};

const Chips = ({ onChangeChips, onChangeSelectedInfo }: ChipsProps) => {
  const [selectedInfo, setSelectedInfo] = useState('mainInfo');

  return (
    <>
      <Chip.Selectable
        className="hidden max-lg:block md:block lg:block"
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
        className="hidden max-lg:block md:block lg:block "
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
        className="hidden max-lg:block md:block lg:block "
        onChipSelect={() => {
          onChangeChips(additionalInfo.data);
          onChangeSelectedInfo('additionalInfo');
          setSelectedInfo('additionalInfo');
        }}
        selected={selectedInfo === 'additionalInfo'}
      >
        <div className="w-max">Additional info</div>
      </Chip.Selectable>
    </>
  );
};

export default Chips;
