import TableSymbolCell from '../table-symbol-cell';
import { TableCellContent } from '../types';

export const TableHeaderCell: React.FC<TableCellContent> = ({
  header,
  className,

  width,
}) => {
  return (
    <TableSymbolCell
      className={className}
      header={header}
      color="coral"
      width={width}
    />
  );
};

export default TableHeaderCell;
