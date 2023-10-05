import { Features } from '@deriv-com/blocks';
import { CardContent } from '@deriv-com/components';
import { Button } from '@deriv/quill-design';

const ourPrinciplesCards: CardContent[] = [
  {
    header: 'Be reliable',
    description:
      'We settle all contracts fairly, process all deposits and withdrawals promptly, and provide reliable support and a high-quality trading experience to all our customers.',
    align: 'start',
    size: 'sm',
    color: 'light',
  },
  {
    header: 'Be fair',
    description:
      'We treat all customers equitably, handle complaints with integrity, and offer competitive prices with no hidden costs and no artificial barriers on customer withdrawals.',
    align: 'start',
    size: 'sm',
    color: 'light',
  },
  {
    header: 'Be transparent',
    description:
      'We speak plainly to avoid ambiguity, disclose the terms of all contracts, and are clear about the risks of trading and how we make money.',
    align: 'start',
    size: 'sm',
    color: 'light',
  },
  {
    header: 'Be responsible',
    description:
      'We don’t practice hard-selling, offer financial or trading advice, nor make promises of guaranteed returns. We don’t encourage vulnerable people to trade and implement controls to prevent any unlawful activity.',
    align: 'start',
    size: 'sm',
    color: 'light',
  },
];

export const WhoWeArePrinciples = () => {
  return (
    <Features.CardFeature
      title="Our values are the fabric of our culture"
      cols="two"
      variant="ContentBottom"
      cards={ourPrinciplesCards}
      cta={<Button size="lg">Learn more about our principles</Button>}
    />
  );
};

export default WhoWeArePrinciples;
