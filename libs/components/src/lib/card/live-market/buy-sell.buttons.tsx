import { ReactNode } from 'react';
import { Text, TradeButton } from '@deriv/quill-design';
import { MarketStatus } from '../types';

export type BuySellButtonsProps = {
  status: MarketStatus;
  spread: string;
  textClass: string;
  spreadContent: ReactNode;
  buyContent: ReactNode;
  sellContent: ReactNode;
  onClickBuyButton?: () => void;
  onClickSellButton?: () => void;
};

export const BuySellButtons = ({
  status,
  spread,
  textClass,
  spreadContent,
  buyContent,
  sellContent,
  onClickBuyButton,
  onClickSellButton,
}: BuySellButtonsProps) => {
  return (
    <div className="flex flex-col gap-gap-md">
      <div className="flex flex-row gap-gap-md">
        <Text size="sm" className={textClass}>
          {spreadContent}
        </Text>
        <Text size="sm" bold className={textClass}>
          {spread}
        </Text>
      </div>
      <div className="flex flex-row gap-gap-md">
        <TradeButton
          tradeType="buy"
          variant="secondary"
          disabled={status === 'closed'}
          className="flex-1"
          onClick={onClickBuyButton}
        >
          {buyContent}
        </TradeButton>
        <TradeButton
          tradeType="sell"
          variant="secondary"
          disabled={status === 'closed'}
          className="flex-1"
          onClick={onClickSellButton}
        >
          {sellContent}
        </TradeButton>
      </div>
    </div>
  );
};
