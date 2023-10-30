import { createColumnHelper } from '@tanstack/react-table';
import { TableDataType } from '../types/types';
import { TableCell } from '@deriv-com/components';
import { MarketForexAudcadIcon } from '@deriv/quill-icons';
import { qtMerge } from '@deriv/quill-design';

const columnHelper = createColumnHelper<TableDataType>();

const UseColumns = (selected: string) => {
  const columns =
    selected === 'mainInfo'
      ? [
          columnHelper.accessor('instrument', {
            header: () => (
              <TableCell.TableHeaderCell
                className={qtMerge('px-600')}
                width="lg"
                header="Instrument"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableSymbolCell
                className={qtMerge('px-600')}
                width="lg"
                icon={<MarketForexAudcadIcon fill="black" iconSize="sm" />}
                label={info.getValue()}
                description="Australian Dollar vs Canadian Dollar"
              ></TableCell.TableSymbolCell>
            ),
          }),
          columnHelper.accessor('current_bid', {
            header: () => (
              <TableCell.TableHeaderCell
                className={qtMerge('text-left')}
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
          columnHelper.accessor('current_ask', {
            header: () => (
              <TableCell.TableHeaderCell
                width="xl"
                className={qtMerge('text-left')}
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
                className={qtMerge('text-left')}
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
                className={qtMerge('text-left')}
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
      : selected === 'trading_condition'
      ? [
          columnHelper.accessor('instrument', {
            header: () => (
              <TableCell.TableHeaderCell
                className={qtMerge('px-600')}
                header="Instrument"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableSymbolCell
                className={qtMerge('px-600')}
                icon={<MarketForexAudcadIcon fill="black" iconSize="sm" />}
                label={info.getValue()}
                description="Australian Dollar vs Canadian Dollar"
              ></TableCell.TableSymbolCell>
            ),
          }),
          columnHelper.accessor('spread_cost', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className={qtMerge('text-left')}
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
                className={qtMerge('text-left')}
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
          columnHelper.accessor('effective_leverage', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className={qtMerge('text-left')}
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
          columnHelper.accessor('margin_requirement', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className={qtMerge('text-left')}
                header="Margin Requirement/lot"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableTextCell
                width="sm"
                label={info.getValue()}
              ></TableCell.TableTextCell>
            ),
          }),
          columnHelper.accessor('swap_long', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className={qtMerge('text-left')}
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
          columnHelper.accessor('swap_short', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className={qtMerge('text-left')}
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

          columnHelper.accessor('day_swap', {
            header: () => (
              <TableCell.TableHeaderCell
                width="sm"
                className={qtMerge('text-left')}
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
                className={qtMerge('px-600')}
                header="Instrument"
              ></TableCell.TableHeaderCell>
            ),
            cell: (info) => (
              <TableCell.TableSymbolCell
                className={qtMerge('px-600')}
                icon={<MarketForexAudcadIcon fill="black" iconSize="sm" />}
                label={info.getValue()}
                description="Australian Dollar vs Canadian Dollar"
              ></TableCell.TableSymbolCell>
            ),
          }),
          columnHelper.accessor('contract_size', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className={qtMerge('text-left')}
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
          columnHelper.accessor('min_volume', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className={qtMerge('text-left')}
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
          columnHelper.accessor('max_volume', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className={qtMerge('text-left')}
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
          columnHelper.accessor('volume_step', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className={qtMerge('text-left')}
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
          columnHelper.accessor('volume_limit', {
            header: () => (
              <TableCell.TableHeaderCell
                width="md"
                className={qtMerge('text-left')}
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
