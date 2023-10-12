import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { DummyDataType } from '../types/types';
import { TableCell } from '@deriv-com/components';
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons';

const columnHelper = createColumnHelper<DummyDataType>();

const UseColumns = () => {
  const columns = useMemo(() => {
    return [
      columnHelper.accessor('header1', {
        header: () => (
          <TableCell.TableHeaderCell
            color="coral"
            header="Header"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableSymbolCell
            icon={
              <StandalonePlaceholderRegularIcon fill="black" iconSize="sm" />
            }
            label={info.getValue()}
            description="Description"
          ></TableCell.TableSymbolCell>
        ),
      }),
      columnHelper.accessor('header2', {
        header: () => (
          <TableCell.TableHeaderCell
            color="coral"
            header="Header"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('header3', {
        header: () => (
          <TableCell.TableHeaderCell
            header="Header"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('header4', {
        header: () => (
          <TableCell.TableHeaderCell
            header="Header"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('header5', {
        header: () => (
          <TableCell.TableHeaderCell
            header="Header"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('header6', {
        header: () => (
          <TableCell.TableHeaderCell
            header="Header"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('header7', {
        header: () => (
          <TableCell.TableHeaderCell
            header="Header"
            color="coral"
          ></TableCell.TableHeaderCell>
        ),
        cell: (info) => (
          <TableCell.TableTextCell
            label={info.getValue()}
          ></TableCell.TableTextCell>
        ),
      }),
      columnHelper.accessor('header8', {
        header: () => (
          <TableCell.TableHeaderCell
            header="Header"
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
