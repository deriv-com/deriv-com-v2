import { StatBlock } from '@deriv-com/blocks';
import { StatCardContent } from '@deriv-com/components';

const derivInNumbersCard: StatCardContent[] = [
  {
    id: 1,
    header: '2.5M+',
    description: 'Online traders worldwide',
    color: 'dark',
  },
  {
    id: 2,
    header: 'USD 46M+',
    description: 'Withdrawals last month',
    color: 'white',
  },
  {
    id: 3,
    header: '187M+',
    description: 'Trades last month',
    color: 'dark',
  },
  {
    id: 4,
    header: 'USD 15T+',
    description: 'Total trade turnover',
    color: 'coral',
  },
];

export const WhoWeAreNumbers = () => {
  return (
    <StatBlock.V1
      title="Deriv in numbers"
      description="We aim to deliver market-leading products that are trusted around the world. "
      cards={derivInNumbersCard}
    />
  );
};

export default WhoWeAreNumbers;
