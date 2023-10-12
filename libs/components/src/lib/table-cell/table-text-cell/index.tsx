import TableSymbolCell from '../table-symbol-cell';
import { TableCellContent } from '../types';

export const TableTextCell: React.FC<TableCellContent> = ({ label }) => {
  return <TableSymbolCell color="white" label={label}></TableSymbolCell>;
};

export default TableTextCell;
