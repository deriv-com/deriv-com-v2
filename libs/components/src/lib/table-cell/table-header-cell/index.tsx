import TableSymbolCell from '../table-symbol-cell';
import { TableCellContent } from '../types';

export const TableHeaderCell: React.FC<TableCellContent> = ({
  header,
  className,
}) => {
  return (
    <TableSymbolCell
      className={className}
      color="coral"
      header={header}
    ></TableSymbolCell>
  );
};

export default TableHeaderCell;
