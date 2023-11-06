import TableSymbolCell from '../table-symbol-cell';
import { TableCellContent } from '../types';

export const TableTextCell: React.FC<TableCellContent> = ({ label, width }) => {
  return <TableSymbolCell label={label} width={width} />;
};

export default TableTextCell;
