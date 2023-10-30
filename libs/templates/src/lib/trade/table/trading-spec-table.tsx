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
import { Button, qtMerge, Section, Text } from '@deriv/quill-design';
import {
  LabelPairedEllipsisVerticalBoldIcon,
  StandaloneChevronLeftRegularIcon,
  StandaloneChevronRightRegularIcon,
  StandaloneCircleDotFillIcon,
  StandaloneCircleRegularIcon,
  StandaloneXmarkRegularIcon,
} from '@deriv/quill-icons';
import { SearchChip } from '@deriv-com/components';
import { BottomSheet } from '@deriv-com/components';

const TradingSpecTable = () => {
  const [data, setData] = useState<TableDataType[]>([]);
  const [selected_filter, setSelectedFilter] = useState<TableDataType[]>(
    mainInfo.data,
  );
  const [selectedInfo, setSelectedInfo] = useState('mainInfo');
  const [searchValue, setSearchValue] = useState('');
  const [showBottomSheet, setShowBottomSheet] = useState(false);

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
          (item) =>
            item.instrument?.instrument?.match(new RegExp(searchValue, 'i')),
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
  useEffect(() => {
    document.body.style.overflow = showBottomSheet ? 'hidden' : 'scroll';
  }, [showBottomSheet]);
  return (
    <Section
      className={qtMerge(
        'py-general-4xl md:mx-auto lg:mx-auto lg:max-w-[1232px]',
      )}
    >
      <div className="flex flex-row gap-gap-lg px-general-md pb-general-md lg:justify-between lg:px-general-none lg:pb-general-lg">
        <form
          className={qtMerge('w-[323px] md:w-[340px] lg:w-[360px]')}
          onSubmit={() => handleSubmit}
        >
          <SearchChip
            onChangeInput={handleChange}
            value={searchValue}
            placeholder="Search"
          />
        </form>

        <div className="flex gap-gap-md ">
          <LabelPairedEllipsisVerticalBoldIcon
            fill="black"
            iconSize="md"
            className={qtMerge('block md:hidden lg:hidden')}
            onClick={() => {
              setShowBottomSheet(true);
              window.scrollTo(
                0,
                document.body.scrollHeight ||
                  document.documentElement.scrollHeight,
              );
            }}
          />

          <Button
            className={qtMerge(
              'hidden md:block lg:block',
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
              'hidden md:block lg:block',
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
              'hidden md:block lg:block',
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
                <td key={cell.id} className={qtMerge('p-general-none')}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length < 1 && (
        <Text
          size="lg"
          className={qtMerge(
            'pt-general-4xl text-center text-typography-default',
          )}
        >
          Sorry, we couldn’t find any results with "{searchValue}" in it
        </Text>
      )}
      {data.length > 1 && (
        <div
          className={qtMerge(
            'flex flex-col',
            'pt-general-lg',
            'gap-gap-xl lg:gap-gap-2xl ',
          )}
        >
          <div className={qtMerge('flex justify-center', 'gap-gap-md')}>
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
                    'p-general-md',
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
        </div>
      )}
      <div className={qtMerge('flex justify-center pt-general-2xl')}>
        <Button colorStyle="black" size="lg">
          Trade now
        </Button>
      </div>

      {showBottomSheet && (
        <BottomSheet
          heading="Table view"
          icon={
            <StandaloneXmarkRegularIcon
              fill="black"
              iconSize="md"
              onClick={() => {
                setShowBottomSheet(false);
              }}
            />
          }
        >
          <div className={qtMerge('mb-gap-lg flex flex-col p-general-md')}>
            <div
              className={qtMerge(
                'flex flex-row items-center gap-gap-md py-gap-md',
              )}
              onClick={() => {
                setSelectedFilter(mainInfo.data);
                setSelectedInfo('mainInfo');
              }}
            >
              {selectedInfo === 'mainInfo' ? (
                <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
              ) : (
                <StandaloneCircleRegularIcon fill="black" iconSize="md" />
              )}

              <Text size="md">Main info</Text>
            </div>
            <div
              className={qtMerge(
                'flex flex-row items-center gap-gap-md py-gap-md',
              )}
              onClick={() => {
                setSelectedFilter(trading_condition.data);
                setSelectedInfo('trading_condition');
              }}
            >
              {selectedInfo === 'trading_condition' ? (
                <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
              ) : (
                <StandaloneCircleRegularIcon fill="black" iconSize="md" />
              )}
              <Text size="md">Trading conditions</Text>
            </div>
            <div
              className={qtMerge(
                'flex flex-row items-center gap-gap-md py-gap-md',
              )}
              onClick={() => {
                setSelectedFilter(additional_info.data);
                setSelectedInfo('additional_info');
              }}
            >
              {selectedInfo === 'additional_info' ? (
                <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
              ) : (
                <StandaloneCircleRegularIcon fill="black" iconSize="md" />
              )}

              <Text size="md">Additional info</Text>
            </div>
          </div>
        </BottomSheet>
      )}
    </Section>
  );
};

export default TradingSpecTable;
