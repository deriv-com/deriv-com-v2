import React from 'react';
import { useEffect, useState } from 'react';
import { additionalInfo, mainInfo, tradingCondition } from '../data/data';
import { TableDataType } from '../types/types';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';
import UseColumns from '../hooks/use-columns';
import {
  Button,
  qtMerge,
  SearchField,
  Section,
  Text,
  Pagination,
} from '@deriv/quill-design';
import {
  StandaloneCircleDotFillIcon,
  StandaloneCircleRegularIcon,
  StandaloneXmarkBoldIcon,
} from '@deriv/quill-icons/Standalone';
import { LabelPairedEllipsisVerticalBoldIcon } from '@deriv/quill-icons/LabelPaired';
import { BottomSheet } from '@deriv-com/components';
import clsx from 'clsx';
import Chips from '../chips';

type TPaginationEvent = {
  currentPage: number;
  totalPageCount: number;
};

const TradingSpecTable = () => {
  const [data, setData] = useState<TableDataType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<TableDataType[]>(
    mainInfo.data,
  );
  const [selectedInfo, setSelectedInfo] = useState('mainInfo');
  const [searchValue, setSearchValue] = useState('');
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const pageSize = 15;
  const pageCount = data.length + 1;

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const handleChipsData = (value: TableDataType[]) => {
    setSelectedFilter(value);
  };
  const handleChipsInfo = (value: string) => {
    setSelectedInfo(value);
  };
  useEffect(() => {
    let updatedRowData = [];
    if (searchValue.length >= 1) {
      updatedRowData = [
        ...selectedFilter.filter(
          (item) =>
            item.instrument?.instrument?.match(new RegExp(searchValue, 'i')),
        ),
      ];

      setData(updatedRowData);
    } else {
      setData(selectedFilter);
    }
  }, [searchValue, selectedFilter]);

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

  const handlePagination = ({ currentPage }: TPaginationEvent) => {
    if (currentPage) {
      table.setPageIndex(currentPage - 1);
    }
  };
  return (
    <Section className="py-general-4xl md:px-general-md lg:mx-auto lg:max-w-[1232px]">
      <div className="flex flex-row gap-gap-lg px-general-md pb-general-md lg:justify-between lg:px-general-none lg:pb-general-lg">
        <form
          className="w-[323px] md:w-[340px] lg:w-[360px]"
          onSubmit={() => handleSubmit}
        >
          <SearchField
            inputSize="sm"
            onChange={(i) => setSearchValue(i.target.value)}
            type="text"
            value={searchValue}
            placeholder="Search"
            className="w-auto"
          />
        </form>

        <div>
          <LabelPairedEllipsisVerticalBoldIcon
            fill="black"
            iconSize="md"
            className="block md:hidden"
            onClick={() => {
              setShowBottomSheet(true);
            }}
          />

          <div className="hidden w-max md:block">
            <Chips
              onChangeChips={handleChipsData}
              onChangeSelectedInfo={handleChipsInfo}
            />
          </div>
        </div>
      </div>
      <table
        className={clsx(
          data.length < 1 && 'pb-general-lg',
          'block w-[100%] overflow-auto',
        )}
      >
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
                <td key={cell.id} className="p-general-none">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length < 1 && (
        <div>
          <Text
            size="lg"
            className="break-words px-general-md py-general-2xl text-center text-typography-default"
          >
            Sorry, we couldn’t find any results with "{searchValue}" in it
          </Text>
        </div>
      )}
      {data.length > 1 && (
        <div className="flex flex-col gap-gap-xl pt-general-lg lg:gap-gap-2xl">
          <Pagination
            variant="number"
            contentPerPage={pageSize}
            contentLength={pageCount}
            onPagination={handlePagination}
          />
        </div>
      )}

      <div className="flex justify-center pt-general-xl md:pt-general-2xl lg:pt-general-2xl">
        <Button
          colorStyle="coral"
          size="lg"
          className={qtMerge('px-general-md py-600 font-sans')}
        >
          Trade now
        </Button>
      </div>

      {showBottomSheet && (
        <BottomSheet
          heading="Table view"
          placeholderIcon={
            <StandaloneXmarkBoldIcon fill="white" iconSize="md" />
          }
          icon={
            <StandaloneXmarkBoldIcon
              fill="black"
              iconSize="md"
              onClick={() => {
                setShowBottomSheet(false);
              }}
            />
          }
        >
          <div className=" flex flex-col p-general-md">
            <div
              className="flex flex-row items-center gap-gap-md px-general-md py-general-sm"
              onClick={() => {
                setSelectedFilter(mainInfo.data);
                setSelectedInfo('mainInfo');
                setShowBottomSheet(false);
              }}
            >
              {selectedInfo === 'mainInfo' ? (
                <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
              ) : (
                <StandaloneCircleRegularIcon fill="black" iconSize="md" />
              )}

              <Text size="md" className="text-typography-default">
                Main info
              </Text>
            </div>
            <div
              className="flex flex-row items-center gap-gap-md px-general-md py-general-sm"
              onClick={() => {
                setSelectedFilter(tradingCondition.data);
                setSelectedInfo('tradingCondition');
                setShowBottomSheet(false);
              }}
            >
              {selectedInfo === 'tradingCondition' ? (
                <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
              ) : (
                <StandaloneCircleRegularIcon fill="black" iconSize="md" />
              )}
              <Text size="md" className="text-typography-default">
                Trading conditions
              </Text>
            </div>
            <div
              className="flex flex-row items-center gap-gap-md px-general-md py-general-sm"
              onClick={() => {
                setSelectedFilter(additionalInfo.data);
                setSelectedInfo('additionalInfo');
                setShowBottomSheet(false);
              }}
            >
              {selectedInfo === 'additionalInfo' ? (
                <StandaloneCircleDotFillIcon fill="black" iconSize="md" />
              ) : (
                <StandaloneCircleRegularIcon fill="black" iconSize="md" />
              )}

              <Text size="md" className="text-typography-default">
                Additional info
              </Text>
            </div>
          </div>
        </BottomSheet>
      )}
    </Section>
  );
};

export default TradingSpecTable;
