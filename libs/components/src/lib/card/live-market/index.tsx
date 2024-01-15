import { useRef } from 'react';
import { qtJoin, qtMerge, Text } from '@deriv/quill-design';
import {
  StandaloneChartTrendDownRegularIcon,
  StandaloneChartTrendUpRegularIcon,
} from '@deriv/quill-icons/Standalone';
import { LiveMarketContent, MarketStatus } from '../types';
import LivePrice from './live-price';
import { BuySellButtons } from './buy-sell.buttons';
import clsx from 'clsx';

const colorVariant: { [key: string]: string } = {
  up: 'fill-solid-emerald-900 text-solid-emerald-900',
  down: 'fill-solid-cherry-700 text-solid-cherry-700',
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
};

export interface LiveMarketCardProps extends Omit<LiveMarketContent, 'id'> {
  className?: string;
}

export const LiveMarketCard: React.FC<LiveMarketCardProps> = ({
  className,
  instrumentIcon,
  instrument,
  changePercentage,
  mid,
  bidPrice,
  askPrice,
  spread,
  bidContent,
  askContent,
  spreadContent,
  buyContent,
  sellContent,
  onClickBuyButton,
  onClickSellButton,
}) => {
  const prevMid = useRef<HTMLDivElement>(null);
  const prevStatus = prevMid.current?.dataset['status'] as MarketStatus;
  let status: MarketStatus = 'up';
  if (prevMid?.current?.textContent) {
    if (mid > +prevMid.current.textContent) status = 'up';
    if (mid < +prevMid.current.textContent) status = 'down';
    if (mid === +prevMid.current.textContent) status = prevStatus;
  }

  const textClassName =
    status === 'closed'
      ? 'text-typography-disabled'
      : 'text-typography-default';

  return (
    <div
      className={qtMerge(
        'flex flex-col',
        'rounded-xl',
        'h-[284px] w-[296px]',
        'bg-background-primary-container',
        'p-general-xl',
        'gap-gap-xl',
        className,
      )}
    >
      <div className="flex h-[52px] shrink-0 grow flex-row justify-between gap-gap-sm">
        <div className="flex max-w-[141px] flex-1 flex-row gap-gap-md">
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
        <div className="flex max-w-[90px] flex-row gap-gap-md pt-[2px] rtl:flex-row-reverse">
          {status !== 'closed' && ChartIcons[status]}
          <Text
            size="md"
            className={qtJoin(colorVariant[status], 'rtl:[direction:ltr]')}
          >
            {changePercentage}
          </Text>
        </div>
      </div>
      <div ref={prevMid} data-status={status} className="sr-only">
        {mid}
      </div>

      <LivePrice
        status={status}
        bidContent={bidContent}
        bidPrice={bidPrice}
        askContent={askContent}
        askPrice={askPrice}
        textClass={textClassName}
      />
      <BuySellButtons
        status={status}
        spreadContent={spreadContent}
        spread={spread}
        textClass={textClassName}
        buyContent={buyContent}
        sellContent={sellContent}
        onClickBuyButton={onClickBuyButton}
        onClickSellButton={onClickSellButton}
      />
    </div>
  );
};

export default LiveMarketCard;
