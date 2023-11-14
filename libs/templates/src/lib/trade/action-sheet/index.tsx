import React, { useState } from 'react';
import { TableDataType } from '../types/types';
import { additionalInfo, mainInfo, tradingCondition } from '../data/data';
import {
  StandaloneCircleDotFillIcon,
  StandaloneCircleRegularIcon,
} from '@deriv/quill-icons';
import { Text } from '@deriv/quill-design';

export type ChipsPros = {
  onChangeChips: (value: TableDataType[]) => void;
  onChangeSelectedInfo: (value: string) => void;
  onChangeBottomSheet: (value: boolean) => void;
};
const ActionSheetBottom = ({
  onChangeChips,
  onChangeBottomSheet,
  onChangeSelectedInfo,
}: ChipsPros) => {
  const [selectedInfo, setSelectedInfo] = useState('mainInfo');

  return (
    <div className=" flex flex-col p-general-md">
      <div
        className="flex flex-row items-center gap-gap-md px-general-md py-gap-md"
        onClick={() => {
          onChangeChips(mainInfo.data);
          setSelectedInfo('mainInfo');
          onChangeSelectedInfo('mainInfo');
          onChangeBottomSheet(false);
        }}
      >
        {selectedInfo === 'mainInfo' ? (
          <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
        ) : (
          <StandaloneCircleRegularIcon fill="black" iconSize="md" />
        )}

        <Text size="md" className="text-typography-default">
          Main info
        </Text>
      </div>
      <div
        className="flex flex-row items-center gap-gap-md px-general-md py-gap-md"
        onClick={() => {
          onChangeChips(tradingCondition.data);
          setSelectedInfo('tradingCondition');
          onChangeSelectedInfo('tradingCondition');
          onChangeBottomSheet(false);
        }}
      >
        {selectedInfo === 'tradingCondition' ? (
          <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
        ) : (
          <StandaloneCircleRegularIcon fill="black" iconSize="md" />
        )}
        <Text size="md" className="text-typography-default">
          Trading conditions
        </Text>
      </div>
      <div
        className="flex flex-row items-center gap-gap-md px-general-md py-gap-md"
        onClick={() => {
          onChangeChips(additionalInfo.data);
          setSelectedInfo('additionalInfo');
          onChangeSelectedInfo('additionalInfo');
          onChangeBottomSheet(false);
        }}
      >
        {selectedInfo === 'additionalInfo' ? (
          <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
        ) : (
          <StandaloneCircleRegularIcon fill="black" iconSize="md" />
        )}

        <Text size="md" className="text-typography-default">
          Additional info
        </Text>
      </div>
    </div>
  );
};

export default ActionSheetBottom;
