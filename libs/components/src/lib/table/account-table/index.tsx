import { ReactNode } from 'react';
import { AccountTable2 } from './table2';

export type TableVariants = {
  AccountTable2: typeof AccountTable2;
};

export const Table: TableVariants = ({ children }: { children: ReactNode }) => {
  return children;
};

Table.AccountTable2 = AccountTable2;

export default Table;

export * from './types';
