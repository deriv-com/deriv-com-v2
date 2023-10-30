import { qtMerge, Text, Button } from '@deriv/quill-design';
import {
  StandaloneArrowUpRegularIcon,
  StandaloneArrowDownRegularIcon,
  StandaloneArrowRightRegularIcon,
} from '@deriv/quill-icons';
import { LiveMarketContent } from '../types';
import LivePrice from './live-price';

export interface LiveMarketCardProps extends LiveMarketContent {
  className?: string;
}

export const LiveMarketCard: React.FC<LiveMarketCardProps> = ({
  className,
  instrumentIcon,
  instrument,
  changePercentage,
  status,
  bidPrice,
  askPrice,
  spread,
}) => {
  const colorVariant = {
    up: 'fill-solid-emerald-900',
    down: 'fill-solid-cherry-700',
    remain: 'fill-opacity-black-400',
    closed: 'fill-opacity-black-300',
  };

  const ChartIcons = {
    up: (
      <StandaloneArrowUpRegularIcon
        iconSize="sm"
        className={colorVariant[status]}
      />
    ),
    down: (
      <StandaloneArrowDownRegularIcon
        iconSize="sm"
        className={colorVariant[status]}
      />
    ),
    remain: (
      <StandaloneArrowRightRegularIcon
        iconSize="sm"
        className={colorVariant[status]}
      />
    ),
  };

  return (
    <div
      className={qtMerge(
        'flex flex-col',
        'rounded-xl',
        'h-[262px] w-[286px]',
        'bg-background-primary-container',
        'p-general-xl',
        'gap-gap-xl',
        className,
        status === 'closed' ? 'opacity-700' : '',
      )}
    >
      <div className="flex h-[52px] flex-row gap-gap-sm">
        <div className="flex flex-1 flex-row gap-gap-md">
          {instrumentIcon}
          <Text size="md" className="pt-general-xs">
            {instrument}
          </Text>
        </div>
        <div className="flex flex-row gap-gap-md pt-[2px]">
          {status !== 'closed' && ChartIcons[status]}
          <Text size="md" style={{ color: colorVariant[status] }}>
            {changePercentage}
          </Text>
        </div>
      </div>

      <LivePrice status={status} bidPrice={bidPrice} askPrice={askPrice} />

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
    </div>
  );
};

export default LiveMarketCard;
