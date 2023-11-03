import { Text } from '@deriv/quill-design';
import clsx from 'clsx';
import { MarketStatus } from '../types';

export interface LivePriceProps {
  status: MarketStatus;
  bidPrice: string;
  askPrice: string;
}

export const LivePrice = ({ status, bidPrice, askPrice }: LivePriceProps) => {
  const colorVariant = {
    up: 'text-solid-emerald-900',
    down: 'text-solid-cherry-700',
    remain: 'text-typography-subtle',
    closed: 'text-typography-disabled',
  };

  const PriceContent = (price: string, status: MarketStatus) => {
    return (
      <div className="flex flex-row items-center gap-[2px]">
        <Text size="md" className={clsx('pt-[6px]', colorVariant[status])}>
          {price?.substring(0, 4)}
        </Text>
        <Text size="xl" className={clsx(colorVariant[status])}>
          {price?.substring(4, 6)}
        </Text>
        <Text size="md" className={clsx('pb-[6px]', colorVariant[status])}>
          {price?.substring(6)}
        </Text>
      </div>
    );
  };

  return (
    <div className="flex flex-row gap-gap-md">
      <div className="flex flex-1 flex-col">
        <Text size="sm" className="text-typography-default">
          Bid
        </Text>
        {PriceContent(bidPrice, status)}
      </div>
      <div className="flex flex-1 flex-col">
        <Text size="sm" className="text-typography-default">
          Ask
        </Text>
        {PriceContent(askPrice, status)}
      </div>
    </div>
  );
};

export default LivePrice;
