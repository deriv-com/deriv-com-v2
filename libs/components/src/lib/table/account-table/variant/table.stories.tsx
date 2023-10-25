import type { Meta, StoryObj } from '@storybook/react';
import AccountTable2 from '.';
import { Button } from '@deriv/quill-design';
import {
  IllustrativeForexIcon,
  LabelPairedMinusRegularIcon,
} from '@deriv/quill-icons';

const meta = {
  title: 'Components/Table/AccountTable2',
  tags: ['auto-docs'],
  parameters: {
    layout: 'centered',
  },
  component: AccountTable2,
} satisfies Meta<typeof AccountTable2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
                  listIcon: (
                    <LabelPairedMinusRegularIcon
                      iconSize="sm"
                      fill="#0000007a"
                    />
                  ),
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
