import { Heading, Text, qtMerge } from '@deriv/quill-design';
import {
  TableCellContent,
  TableCellColorVariant,
  TableWidthVariant,
} from '../types';

export interface TableCellProps extends TableCellContent {
  className?: string;
}

const sizeVariants: { [key in TableWidthVariant]: string } = {
  xl: 'lg:w-[246px] md:w-[138px] w-[110px]',
  lg: 'lg:w-[246px] w-[204px]',
  md: 'lg:w-[196px] w-[120px]',
  sm: 'lg:w-[140px] w-[120px]',
};
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
  width = 'lg',
  className,
}) => {
  return (
    <div
      className={qtMerge(
        colorVariants[color],
        sizeVariants[width],
        'p-200 lg:px-800',
        'border-b-75 border-b-solid-slate-75',
        'flex flex-col',
        'min-h-[72px]',
        'items-start  justify-center',
        className,
      )}
    >
      <div className={qtMerge('gap-200', 'flex', 'items-start')}>
        {icon && icon}
        <Heading.H7>{header}</Heading.H7>
        <div className={qtMerge('flex flex-col', 'items-start justify-center')}>
          {label && <Text size="sm">{label}</Text>}
          {description && (
            <Text
              size="sm"
              className="w-[144px] truncate text-50 text-typography-disabled lg:w-[186px]"
            >
              {description}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableSymbolCell;
