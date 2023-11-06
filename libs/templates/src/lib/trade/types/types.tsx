import { ReactNode } from 'react';

export type TInstrumentData = {
  instrument?: string;
  icon?: ReactNode;
  description?: string;
};

export type TableDataType = {
  instrument?: TInstrumentData;
  description?: string;
  current_bid?: number;
  current_ask?: number;
  spread?: number;
  currency?: string;
  spread_cost?: number;
  commission?: string | number;
  effective_leverage?: number | string;
  margin_requirement?: number | string;
  swap_long?: number;
  swap_short?: number;
  day_swap?: string;
  contract_size?: number;
  min_volume?: number;
  max_volume?: number;
  volume_step?: number;
  volume_limit?: number;
};

export type TableDataTypeProps = {
  data: TableDataType[];
};
