import type { Meta, StoryObj } from '@storybook/react';
import AccountTable from '.';
import { Button } from '@deriv/quill-design';
import { LabelPairedMinusMdRegularIcon } from '@deriv/quill-icons/LabelPaired';
import { IllustrativeForexIcon } from '@deriv/quill-icons/Illustrative';

const meta = {
  title: 'Components/Table/AccountTable',
  tags: ['auto-docs'],
  parameters: {
    layout: 'centered',
  },
  component: AccountTable,
} satisfies Meta<typeof AccountTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <AccountTable.Container
        tableData={args.tableData}
        contentClasses={args.contentClasses}
      >
        <AccountTable.Content tableData={args.tableData} />
      </AccountTable.Container>
    );
  },
};

export const Default = {
  ...Template,
  args: {
    className: '',
    contentClasses: 'bg-background-primary-container',
    tableData: {
      header: 'The STP trading account',
      description:
        'Direct market access with fast order execution and no dealing desk intervention.',
      cta: (
        <Button variant="secondary" className="w-1/2">
          Get this account
        </Button>
      ),
      rows: [
        {
          cols: [
            {
              subheader: 'Features',
              listItems: [
                {
                  type: 'simple',
                  text: 'Zero commission',
                },
                {
                  type: 'simple',
                  text: '1:1000 leverage',
                },
              ],
            },
            {
              subheader: 'Markets',
              listItems: [
                {
                  type: 'compound',
                  text: 'Forex',
                  icon: <IllustrativeForexIcon iconSize="sm" />,
                  listIcon: <LabelPairedMinusMdRegularIcon fill="#0000007a" />,
                  items: ['Majors', 'Minors', 'Exotics'],
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
