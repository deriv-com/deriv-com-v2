import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { DummyDataType } from '../types/types';
import { TableCell } from '@deriv-com/components';
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons';
import { qtMerge } from '@deriv/quill-design';

const columnHelper = createColumnHelper<DummyDataType>();

const UseColumns = () => {
  const columns = useMemo(() => {
    return [
      columnHelper.accessor('instrument', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('px-600')}
            color="coral"
            header="Instrument"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableSymbolCell
            className={qtMerge('px-600')}
            icon={
              <StandalonePlaceholderRegularIcon fill="black" iconSize="sm" />
            }
            label={info.getValue()}
            description="Description"
          ></TableCell.TableSymbolCell>
        ),
      }),
      columnHelper.accessor('current_bid', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            color="coral"
            header="Current Bid"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('current_ask', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Current Ask"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('spread', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Spread"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('currency', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Currency"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('spread_cost', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Spread Cost per 1 Lot [USD]"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('commission', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Commissions [USD]"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('effective_leverage', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Effective Leverage"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('margin_requirement', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Margin Requirement/lot"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('swap_long', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Daily Swap Long (points)"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('swap_short', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Daily Swap Short (points)"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('effective_leverage', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Effective Leverage"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('day_swap', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="3 Day Swap"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('contract_size', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Contract Size"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('min_volume', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Minimum Volume"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('max_volume', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Maximum Volume"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('volume_step', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Volume Step"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('volume_limit', {
        header: () => (
          <TableCell.TableHeaderCell
            className={qtMerge('text-left')}
            header="Volume Limit"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
    ];
  }, []);
  return columns;
};

export default UseColumns;
