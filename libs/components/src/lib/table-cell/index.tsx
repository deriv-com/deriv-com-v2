import { ReactNode } from 'react';
import TableHeaderCell from './table-header-cell';
import TableSymbolCell from './table-symbol-cell';
import TableTextCell from './table-text-cell';

export type TableCellVariant = {
  TableHeaderCell: typeof TableHeaderCell;
  TableSymbolCell: typeof TableSymbolCell;
  TableTextCell: typeof TableTextCell;
};

export const TableCell: TableCellVariant = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

TableCell.TableHeaderCell = TableHeaderCell;
TableCell.TableSymbolCell = TableSymbolCell;
TableCell.TableTextCell = TableTextCell;

export default TableCell;
