import type { Meta, StoryObj } from '@storybook/react';
import AccountTable2 from '.';
import { Button } from '@deriv/quill-design';
import {
  IllustrativeForexIcon,
  StandaloneArrowDownRightRegularIcon,
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
              items: ['Zero commission', '1:1000 leverage'],
            },
            {
              subheader: 'Markets',
              items: [
                {
                  icon: <StandaloneArrowDownRightRegularIcon iconSize="sm" />,
                  text: 'Forex',
                  listIcon: <IllustrativeForexIcon iconSize="sm" />,
                  lists: ['Majors', 'Minors', 'Exotics'],
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
