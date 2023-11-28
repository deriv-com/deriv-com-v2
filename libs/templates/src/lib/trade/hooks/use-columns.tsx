import { createColumnHelper } from '@tanstack/react-table';
import { TableDataType } from '../types/types';
import { TableCell } from '@deriv-com/components';

const columnHelper = createColumnHelper<TableDataType>();

const UseColumns = (selected: string) => {
  const columns =
    selected === 'mainInfo'
      ? [
          columnHelper.accessor('instrument', {
            header: () => (
              <TableCell.TableHeaderCell
                className="px-600"
                width="lg"
                header="Instrument"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableSymbolCell
                className="px-600"
                width="lg"
                icon={info.getValue()?.icon}
                label={info.getValue()?.instrument}
                description={info.getValue()?.description}
              ></TableCell.TableSymbolCell>
            ),
          }),
          columnHelper.accessor('currentBid', {
            header: () => (
              <TableCell.TableHeaderCell
                className="text-left"
                header="Current Bid"
                width="xl"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="xl"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('currentAsk', {
            header: () => (
              <TableCell.TableHeaderCell
                width="xl"
                className="text-left"
                header="Current Ask"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="xl"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('spread', {
            header: () => (
              <TableCell.TableHeaderCell
                width="xl"
                className="text-left"
                header="Spread"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="xl"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('currency', {
            header: () => (
              <TableCell.TableHeaderCell
                width="xl"
                className="text-left"
                header="Currency"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="xl"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
        ]
      : selected === 'tradingCondition'
      ? [
          columnHelper.accessor('instrument', {
            header: () => (
              <TableCell.TableHeaderCell
                className="px-600"
                header="Instrument"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableSymbolCell
                className="px-600"
                icon={info.getValue()?.icon}
                label={info.getValue()?.instrument}
                description={info.getValue()?.description}
              ></TableCell.TableSymbolCell>
            ),
          }),
          columnHelper.accessor('spreadCost', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className="text-left"
                header="Spread Cost per 1 Lot [USD]"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('commission', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className="text-left"
                header="Commissions [USD]"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('effectiveLeverage', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className="text-left"
                header="Effective Leverage"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('marginRequirement', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className="text-left"
                header="Margin Requirement/ lot"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('swapLong', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className="text-left"
                header="Daily Swap Long (points)"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('swapShort', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className="text-left"
                header="Daily Swap Short (points)"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),

          columnHelper.accessor('daySwap', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className="text-left"
                header="3 Day Swap"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
        ]
      : [
          columnHelper.accessor('instrument', {
            header: () => (
              <TableCell.TableHeaderCell
                className="px-600"
                header="Instrument"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableSymbolCell
                className="px-600"
                icon={info.getValue()?.icon}
                label={info.getValue()?.instrument}
                description={info.getValue()?.description}
              ></TableCell.TableSymbolCell>
            ),
          }),
          columnHelper.accessor('contractSize', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className="text-left"
                header="Contract Size"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="md"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('minVolume', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className="text-left"
                header="Minimum Volume"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="md"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('maxVolume', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className="text-left"
                header="Maximum Volume"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="md"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('volumeStep', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className="text-left"
                header="Volume Step"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="md"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('volumeLimit', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className="text-left"
                header="Volume Limit"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="md"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
        ];

  return columns;
};

export default UseColumns;
