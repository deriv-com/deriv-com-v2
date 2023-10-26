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
} from '@deriv/quill-icons';
import { SearchChip } from '@deriv-com/components';

const TradingSpecTable = () => {
  const [data, setData] = useState<TableDataType[]>([]);
  const [selected_filter, setSelectedFilter] = useState<TableDataType[]>(
    mainInfo.data,
  );
  const [selectedInfo, setSelectedInfo] = useState('mainInfo');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    let updatedRowData = [];
    if (searchValue.length >= 1) {
      updatedRowData = [
        ...selected_filter.filter(
          (item) => item.instrument?.match(new RegExp(searchValue, 'i')),
        ),
      ];
      setData(updatedRowData);
    } else {
      setData(selected_filter);
    }
  }, [searchValue, selected_filter]);

  const columns = UseColumns(selectedInfo);

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
        <form
          className={qtMerge('w-[313px] lg:w-[360px]')}
          onSubmit={() => handleSubmit}
        >
          <SearchChip
            onChangeInput={handleChange}
            value={searchValue}
            placeholder="Search"
          />
        </form>

        <div className="flex flex-col justify-end gap-400 lg:flex-row">
          <Button
            className={qtMerge(
              selectedInfo === 'mainInfo'
                ? 'bg-solid-slate-1400'
                : 'border-75 border-solid-slate-100 bg-background-primary-container text-opacity-black-700',
            )}
            onClick={() => {
              setSelectedFilter(mainInfo.data);
              setSelectedInfo('mainInfo');
            }}
          >
            Main info
          </Button>
          <Button
            className={qtMerge(
              selectedInfo === 'trading_condition'
                ? 'bg-solid-slate-1400'
                : 'border-75 border-solid-slate-100 bg-background-primary-container text-opacity-black-700',
            )}
            onClick={() => {
              setSelectedFilter(trading_condition.data);
              setSelectedInfo('trading_condition');
            }}
          >
            Trading condition
          </Button>
          <Button
            className={qtMerge(
              selectedInfo === 'additional_info'
                ? 'bg-solid-slate-1400'
                : 'border-75 border-solid-slate-100 bg-background-primary-container text-opacity-black-700',
            )}
            onClick={() => {
              setSelectedFilter(additional_info.data);
              setSelectedInfo('additional_info');
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
          <Button className="bg-solid-slate-1400">Trade now</Button>
        </div>
      </div>
    </>
  );
};

export default TradingSpecTable;
