import { ReactNode } from 'react';
import { Text } from '@deriv/quill-design';
import clsx from 'clsx';
import { MarketStatus } from '../types';

export interface LivePriceProps {
  status: MarketStatus;
  bidPrice: string;
  askPrice: string;
  textClass: string;
  bidContent: ReactNode;
  askContent: ReactNode;
}

const colorVariant = {
  up: 'text-solid-emerald-900',
  down: 'text-solid-cherry-700',
  closed: 'text-typography-disabled',
};

export const LivePrice = ({
  status,
  bidPrice,
  askPrice,
  textClass,
  bidContent,
  askContent,
}: LivePriceProps) => {
  return (
    <div className="flex flex-row gap-gap-md">
      <div className="flex flex-1 flex-col">
        <Text size="sm" className={textClass}>
          {bidContent}
        </Text>
        <Text
          size="lg"
          className={clsx(
            'flex h-full items-end pb-[3px]',
            colorVariant[status],
          )}
        >
          {bidPrice}
        </Text>
      </div>
      <div className="flex flex-1 flex-col">
        <Text size="sm" className={textClass}>
          {askContent}
        </Text>
        <Text
          size="lg"
          className={clsx(
            'flex h-full items-end pb-[3px]',
            colorVariant[status],
          )}
        >
          {askPrice}
        </Text>
      </div>
    </div>
  );
};

export default LivePrice;
