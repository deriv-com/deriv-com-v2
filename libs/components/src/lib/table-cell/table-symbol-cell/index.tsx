import { Heading, Text, qtMerge } from '@deriv/quill-design';
import { TableCellContent, TableCellColorVariant } from '../types';

export interface TableCellProps extends TableCellContent {
  className?: string;
}

const colorVariants: { [key in TableCellColorVariant]: string } = {
  coral: 'bg-solid-slate-75',
  white: 'bg-solid-slate-50',
};

export const TableSymbolCell: React.FC<TableCellProps> = ({
  header,
  label,
  description,
  color = 'white',
  icon,
  className,
}) => {
  return (
    <div
      className={qtMerge(
        colorVariants[color],
        'p-200',
        'border-b-solid-slate-50',
        'flex flex-col',
        'min-h-[72px] min-w-[130px]',
        'items-start  justify-center',
        className,
      )}
    >
      <div className={qtMerge('gap-400', 'flex', 'items-start')}>
        {icon && icon}
        <Heading.H7>{header}</Heading.H7>
        <div className={qtMerge('flex flex-col', 'items-start justify-center')}>
          {label && <Text size="sm">{label}</Text>}
          {description && <Text size="sm">{description}</Text>}
        </div>
      </div>
    </div>
  );
};

export default TableSymbolCell;
