import { Text, TradeButton } from '@deriv/quill-design';
import { MarketStatus } from '../types';

const spreadClass = (status: MarketStatus) => {
  return status === 'closed'
    ? 'text-typography-disabled'
    : 'text-typography-default';
};

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
        <Text size="sm" className={spreadClass(status)}>
          Spread
        </Text>
        <Text size="sm" bold className={spreadClass(status)}>
          {spread}
        </Text>
      </div>
      <div className="flex flex-row gap-gap-md">
        <TradeButton
          tradeType="buy"
          variant="secondary"
          disabled={status === 'closed'}
          className="flex-1"
        >
          Buy
        </TradeButton>
        <TradeButton
          tradeType="sell"
          variant="secondary"
          disabled={status === 'closed'}
          className="flex-1"
        >
          Sell
        </TradeButton>
      </div>
    </div>
  );
};
