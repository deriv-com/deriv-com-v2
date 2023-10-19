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
    up: '#00ae7a',
    down: '#de0040',
    remain: '#0000007a',
    closed: '#0000003d',
  };

  const ChartIcon = () => {
    return status === 'up' ? (
      <StandaloneArrowUpRegularIcon iconSize="sm" fill={colorVariant[status]} />
    ) : status === 'down' ? (
      <StandaloneArrowDownRegularIcon
        iconSize="sm"
        fill={colorVariant[status]}
      />
    ) : (
      <StandaloneArrowRightRegularIcon
        iconSize="sm"
        fill={colorVariant[status]}
      />
    );
  };

  return (
    <div
      className={qtMerge(
        'flex flex-col',
        'rounded-pill',
        'h-[262px] w-[286px]',
        'bg-background-primary-container',
        'p-general-lg lg:p-general-xl',
        'gap-gap-xl',
        className,
        status === 'closed' ? 'opacity-700' : '',
      )}
    >
      <div className="flex h-[52px] flex-row justify-between">
        <div className="flex flex-row gap-gap-md">
          {instrumentIcon}
          <Text size="md" className="pt-general-xs">
            {instrument}
          </Text>
        </div>
        <div className="flex flex-row gap-gap-md pt-[2px]">
          {status !== 'closed' && <ChartIcon />}
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
          <Text size="sm" variant="bold">
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
