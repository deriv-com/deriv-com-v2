import { ReactNode } from 'react';
import { TableContent } from '../types';
import { Heading, Text } from '@deriv/quill-design';
import clsx from 'clsx';

export interface AccountTableProps {
  className?: string;
  tableData: TableContent;
  contentClasses?: string;
  children: ReactNode;
}

export const Container = ({
  className,
  tableData,
  contentClasses,
  children,
}: AccountTableProps) => {
  return (
    <div
      className={clsx(
        'grid w-full grid-cols-1 lg:grid-cols-3 lg:gap-gap-lg',
        className,
      )}
    >
      <div className="flex flex-col gap-gap-xl p-general-xl lg:gap-gap-3xl">
        <div className="flex flex-col gap-gap-lg">
          <Heading.H3>{tableData.header}</Heading.H3>
          <Text className="text-typography-default">
            {tableData.description}
          </Text>
        </div>
        <div>{tableData.cta}</div>
      </div>
      <div
        className={clsx(
          'col-span-2 p-general-xl max-sm:rounded-b-xl sm:rounded-r-xl',
          contentClasses,
        )}
      >
        <div className="grid h-full grid-cols-1 max-sm:gap-gap-xl sm:grid-cols-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
