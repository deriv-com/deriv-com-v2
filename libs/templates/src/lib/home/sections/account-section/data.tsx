import { TableContent } from '@deriv-com/components';
import { Button } from '@deriv/quill-design';
import { IllustrativeForexIcon } from '@deriv/quill-icons/Illustrative';
import { LabelPairedMinusRegularIcon } from '@deriv/quill-icons/LabelPaired';

export const TableData: TableContent = {
  header: 'The STP trading account',
  description:
    'Direct market access with fast order execution and no dealing desk intervention.',
  cta: (
    <Button variant="secondary" colorStyle="black" size="lg" className="w-1/2">
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
                <LabelPairedMinusRegularIcon iconSize="sm" fill="#0000007a" />
              ),
              items: ['Majors', 'Minors', 'Exotics'],
            },
          ],
        },
      ],
    },
  ],
};
