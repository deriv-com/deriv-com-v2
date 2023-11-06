import { ReactNode } from 'react';

export type TableCellVariant = 'header' | 'symbol' | 'text';
export type TableCellColorVariant = 'white' | 'coral';
export type TableWidthVariant = 'xl' | 'lg' | 'md' | 'sm';

export interface TableCellContent {
  header?: string;
  label?: string | ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  description?: string;
  color?: TableCellColorVariant;
  className?: string;
  width?: TableWidthVariant;
}
