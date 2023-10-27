import { ReactNode } from 'react';
import { AccountTable } from './variant';

export type TableVariants = {
  AccountTable: typeof AccountTable;
};

export const Table: TableVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Table.AccountTable = AccountTable;

export default Table;

export * from './types';
