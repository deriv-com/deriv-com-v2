import { Heading } from '@deriv/quill-design';
import { TableContent } from '../types';
import React from 'react';
import clsx from 'clsx';
import { ListContent } from './list.content';

interface TableContentSectionProps {
  tableData: TableContent;
}

const TableContentSection = ({ tableData }: TableContentSectionProps) => {
  return tableData.rows.map((row, rowIndex) => (
    <React.Fragment key={rowIndex}>
      {row.cols.map((colData, colIndex) => (
        <div
          key={colData.subheader}
          className={clsx(
            'flex flex-col gap-gap-md',
            colIndex % 2 === 0 &&
              'border-opacity-black-100 sm:border-r-75 sm:pr-general-xl lg:pr-general-2xl',
            colIndex % 2 === 1 && 'sm:pl-general-xl lg:pl-general-2xl',
            rowIndex > 0 && 'sm:mt-general-xl lg:mt-general-xl',
          )}
        >
          <Heading.H6>{colData.subheader}</Heading.H6>
          <ListContent colData={colData} />
        </div>
      ))}
    </React.Fragment>
  ));
};

export default TableContentSection;
