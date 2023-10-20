import { ReactNode } from 'react';

export type TableCellVariant = 'header' | 'symbol' | 'text';
export type TableCellColorVariant = 'white' | 'coral';

export interface TableCellContent {
  header?: string;
  label?: string | ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  description?: string;
  color?: TableCellColorVariant;
  className?: string;
}
