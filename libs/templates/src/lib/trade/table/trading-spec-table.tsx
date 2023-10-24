import { useEffect, useState } from 'react';
import { mainInfo, trading_condition, additional_info } from '../data/data';
import { TableDataType } from '../types/types';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';
import UseColumns from '../hooks/use-columns';
import { Button, qtMerge } from '@deriv/quill-design';
import {
  StandaloneChevronLeftRegularIcon,
  StandaloneChevronRightRegularIcon,
  StandaloneSearchRegularIcon,
} from '@deriv/quill-icons';

const TradingSpecTable = () => {
  const [data, setData] = useState<TableDataType[]>([]);
  const [selected_filter, setSelectedFilter] = useState<TableDataType[]>(
    mainInfo.data,
  );
  const [selected, setSelected] = useState('mainInfo');
  useEffect(() => {
    setData(selected_filter);
  }, [selected_filter, data]);

  const columns = UseColumns(selected);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  useEffect(() => {
    table.setPageSize(15);
  }, [table]);
  return (
    <>
      <div className="flex flex-col justify-between pt-3600 lg:flex-row">
        <div className="flex justify-start border-75 border-solid-slate-100 p-200">
          <StandaloneSearchRegularIcon fill="black" iconSize="sm" />
          <input placeholder="Search" />
        </div>

        <div className="flex flex-col justify-end gap-400 lg:flex-row">
          <Button
            className={qtMerge(
              selected === 'mainInfo'
                ? 'bg-solid-slate-1400'
                : 'border-75 border-solid-slate-100 bg-background-primary-container text-opacity-black-700',
            )}
            onClick={() => {
              setSelectedFilter(mainInfo.data);
              setSelected('mainInfo');
            }}
          >
            Main info
          </Button>
          <Button
            className={qtMerge(
              selected === 'trading_condition'
                ? 'bg-solid-slate-1400'
                : 'border-75 border-solid-slate-100 bg-background-primary-container text-opacity-black-700',
            )}
            onClick={() => {
              setSelectedFilter(trading_condition.data);
              setSelected('trading_condition');
            }}
          >
            Trading condition
          </Button>
          <Button
            className={qtMerge(
              selected === 'additional_info'
                ? 'bg-solid-slate-1400'
                : 'border-75 border-solid-slate-100 bg-background-primary-container text-opacity-black-700',
            )}
            onClick={() => {
              setSelectedFilter(additional_info.data);
              setSelected('additional_info');
            }}
          >
            Additional info
          </Button>
        </div>
      </div>
      <table className={qtMerge('overflow-auto', 'inline-block', 'w-[100%]')}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={qtMerge('p-50')}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={qtMerge('p-50')}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={qtMerge('flex flex-col', 'p-1200', 'gap-1200')}>
        <div className={qtMerge('flex justify-center', 'gap-400')}>
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={qtMerge('bg-opacity-white-100')}
          >
            <StandaloneChevronLeftRegularIcon fill="black" iconSize="sm" />
          </Button>
          {table.getPageOptions().map((page) => {
            const selected = page === table.getState().pagination.pageIndex;
            return (
              <Button
                key={page}
                onClick={() => table.setPageIndex(page)}
                color="black"
                className={qtMerge(
                  selected
                    ? 'bg-solid-slate-1400'
                    : ' bg-background-primary-container text-opacity-black-600',
                  'p-800',
                )}
              >
                {page + 1}
              </Button>
            );
          })}
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={qtMerge('bg-opacity-white-100')}
          >
            <StandaloneChevronRightRegularIcon fill="black" iconSize="sm" />
          </Button>
        </div>
        <div className={qtMerge('flex justify-center')}>
          <Button className={qtMerge('bg-solid-slate-1400')}>Trade now</Button>
        </div>
      </div>
    </>
  );
};

export default TradingSpecTable;
