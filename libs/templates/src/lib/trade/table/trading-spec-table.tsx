import { useEffect, useState } from 'react';
import DummyData from '../data/data';
import { DummyDataType } from '../types/types';
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
} from '@deriv/quill-icons';

const TradingSpecTable = () => {
  const [data, setData] = useState<DummyDataType[]>([]);
  useEffect(() => {
    setData(DummyData);
  }, [data]);

  const columns = UseColumns();

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
          <Button>Trade now</Button>
        </div>
      </div>
    </>
  );
};

export default TradingSpecTable;
