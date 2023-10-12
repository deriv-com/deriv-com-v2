import TableSymbolCell from '../table-symbol-cell';
import { TableCellContent } from '../types';

export const TableHeaderCell: React.FC<TableCellContent> = ({ header }) => {
  return <TableSymbolCell color="coral" header={header}></TableSymbolCell>;
};

export default TableHeaderCell;
