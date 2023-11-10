import { ReactNode } from 'react';

export type TInstrumentData = {
  instrument?: string;
  icon?: ReactNode;
  description?: string;
};

export type TableDataType = {
  instrument?: TInstrumentData;
  description?: string;
  currentBid?: number;
  currentAsk?: number;
  spread?: number;
  currency?: string;
  spreadCost?: number;
  commission?: string | number;
  effectiveLeverage?: number | string;
  marginRequirement?: number | string;
  swapLong?: number;
  swapShort?: number;
  daySwap?: string;
  contractSize?: number;
  minVolume?: number;
  maxVolume?: number;
  volumeStep?: number;
  volumeLimit?: number;
};

export type TableDataTypeProps = {
  data: TableDataType[];
};
