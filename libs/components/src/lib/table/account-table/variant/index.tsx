import { ReactNode } from 'react';
import TableContentSection from './table.content';
import Container from './table.container';

type AccountTable = {
  Container: typeof Container;
  Content: typeof TableContentSection;
};

export const AccountTable: AccountTable = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

AccountTable.Container = Container;

AccountTable.Content = TableContentSection;

export default AccountTable;
