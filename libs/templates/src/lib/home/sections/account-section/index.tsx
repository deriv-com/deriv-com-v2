import { TableData } from './data';
import { AccountComparison } from '@deriv-com/blocks';
import { Table } from '@deriv-com/components';

const account = () => {
  return (
    <Table.AccountTable.Container
      tableData={TableData}
      contentClasses="bg-solid-slate-75"
    >
      <Table.AccountTable.Content tableData={TableData} />
    </Table.AccountTable.Container>
  );
};

const AccountSection = () => {
  return (
    <AccountComparison
      title="One trading account is all you need"
      content={account}
    />
  );
};

export default AccountSection;
