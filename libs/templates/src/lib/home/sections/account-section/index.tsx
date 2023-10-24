import { TableData } from './data';
import { AccountComparison } from '@deriv-com/blocks';
import { Table } from '@deriv-com/components';

const AccountSection = () => {
  const account = () => {
    return (
      <Table.AccountTable2
        tableData={TableData}
        contentClasses="bg-solid-slate-75"
      />
    );
  };

  return (
    <AccountComparison
      title="One trading account is all you need"
      content={account}
    />
  );
};

export default AccountSection;
