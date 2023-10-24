import { TableContent } from '@deriv-com/components';
import { Button } from '@deriv/quill-design';
import {
  IllustrativeForexIcon,
  StandaloneArrowDownRightRegularIcon,
} from '@deriv/quill-icons';

export const TableData: TableContent = {
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
};
