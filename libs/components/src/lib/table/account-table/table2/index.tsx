import React from 'react';
import { Heading, Text, qtMerge } from '@deriv/quill-design';
import clsx from 'clsx';
import { TableContent } from '../types';

export interface AccountTableProps {
  className?: string;
  tableData: TableContent;
  contentClasses?: string;
}

export const AccountTable2: React.FC<AccountTableProps> = ({
  className,
  tableData,
  contentClasses,
}) => {
  return (
    <div
      className={qtMerge(
        'grid w-full grid-cols-1 lg:grid-cols-3 lg:gap-gap-lg',
        className,
      )}
    >
      <div className="flex flex-col gap-gap-xl p-general-xl lg:gap-gap-2xl lg:p-general-2xl">
        <div className="flex flex-col gap-gap-lg">
          <Heading.H3>{tableData.header}</Heading.H3>
          <Text className="text-opacity-black-600">
            {tableData.description}
          </Text>
        </div>
        {tableData.cta}
      </div>
      <div
        className={qtMerge(
          'col-span-2 p-general-xl max-md:rounded-b-2xl md:rounded-r-2xl lg:p-general-2xl',
          contentClasses,
        )}
      >
        <div className="grid h-full grid-cols-1 max-md:gap-gap-xl md:grid-cols-2">
          {tableData.rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.cols.map((colData, colIndex) => (
                <div
                  key={colData.subheader}
                  className={clsx(
                    'flex flex-col gap-gap-md',
                    colIndex % 2 === 0
                      ? 'md:border-r-75 md:border-opacity-black-100 md:pr-general-xl lg:pr-general-2xl'
                      : '',
                    colIndex % 2 === 1
                      ? 'md:pl-general-xl lg:pl-general-2xl'
                      : '',
                    rowIndex > 0 ? 'mt-general-2xl' : '',
                  )}
                >
                  <Heading.H6>{colData.subheader}</Heading.H6>
                  <div>
                    {colData.items.map((item) =>
                      typeof item === 'string' ? (
                        <Text
                          key={item}
                          className="py-general-sm text-opacity-black-600"
                        >
                          {item}
                        </Text>
                      ) : (
                        <div
                          key={item.text}
                          className="flex flex-col gap-gap-md py-general-sm"
                        >
                          <div className="flex flex-row gap-gap-md">
                            {item.listIcon}
                            <Text className="text-opacity-black-600">
                              {item.text}
                            </Text>
                          </div>
                          <div className="flex flex-col gap-gap-md px-general-xl">
                            {item.lists.map((list) => (
                              <div key={list} className="flex flex-row">
                                {item.icon}{' '}
                                <Text className="text-opacity-black-400">
                                  {list}
                                </Text>
                              </div>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountTable2;
