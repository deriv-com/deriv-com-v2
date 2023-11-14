import { qtMerge, Text } from '@deriv/quill-design';
import {
  StandaloneChartTrendDownRegularIcon,
  StandaloneChartTrendSidewayRegularIcon,
  StandaloneChartTrendUpRegularIcon,
} from '@deriv/quill-icons/Standalone';
import { LiveMarketContent } from '../types';
import LivePrice from './live-price';
import { BuySellButtons } from './buy-sell.buttons';
import clsx from 'clsx';

const colorVariant: { [key: string]: string } = {
  up: 'fill-solid-emerald-900 text-solid-emerald-900',
  down: 'fill-solid-cherry-700 text-solid-cherry-700',
  remain: 'fill-opacity-black-400 text-typography-subtle',
  closed: 'fill-opacity-black-300 text-typography-disabled',
};

const ChartIcons = {
  up: (
    <StandaloneChartTrendUpRegularIcon
      iconSize="sm"
      className={colorVariant['up']}
    />
  ),
  down: (
    <StandaloneChartTrendDownRegularIcon
      iconSize="sm"
      className={colorVariant['down']}
    />
  ),
  remain: (
    <StandaloneChartTrendSidewayRegularIcon
      iconSize="sm"
      className={colorVariant['remain']}
    />
  ),
};

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
      )}
    >
      <div className="flex h-[52px] flex-row gap-gap-sm">
        <div className="flex flex-1 flex-row gap-gap-md">
          <div className={clsx(status === 'closed' && 'opacity-600')}>
            {instrumentIcon}
          </div>
          <Text
            size="md"
            className={qtMerge(
              'pt-general-xs',
              status === 'closed' && 'text-typography-subtle',
            )}
          >
            {instrument}
          </Text>
        </div>
        <div className="flex flex-row gap-gap-md pt-[2px]">
          {status !== 'closed' && ChartIcons[status]}
          <Text size="md" className={colorVariant[status]}>
            {changePercentage}
          </Text>
        </div>
      </div>

      <LivePrice status={status} bidPrice={bidPrice} askPrice={askPrice} />
      <BuySellButtons status={status} spread={spread} />
    </div>
  );
};

export default LiveMarketCard;
