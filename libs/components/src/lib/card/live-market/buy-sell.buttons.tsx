import { Text, Button } from '@deriv/quill-design';
import { MarketStatus } from '../types';

export const BuySellButtons = ({
  status,
  spread,
}: {
  status: MarketStatus;
  spread: string;
}) => {
  return (
    <div className="flex flex-col gap-gap-md">
      <div className="flex flex-row gap-gap-md">
        <Text size="sm" className="text-typography-default">
          Spread
        </Text>
        <Text size="sm" bold>
          {spread}
        </Text>
      </div>
      <div className="flex flex-row gap-gap-md">
        <Button disabled={status === 'closed'} className="flex-1">
          Buy
        </Button>
        <Button
          disabled={status === 'closed'}
          className="flex-1"
          colorStyle="black"
        >
          Sell
        </Button>
      </div>
    </div>
  );
};
