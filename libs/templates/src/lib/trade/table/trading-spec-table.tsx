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
import { qtMerge } from '@deriv/quill-design';
import Pagination from '../pagination';

const TradingSpecTable = () => {
  const [data, setData] = useState<DummyDataType[]>([]);
  const colData = useEffect(() => {
    setData(DummyData);
  }, [data]);

  const columns = UseColumns(colData);

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

      <Pagination table={table} />
    </>
  );
};

export default TradingSpecTable;
