import { Hero } from '@deriv-com/blocks';
import { PageLayout } from '@deriv-com/components';
import { Text, qtMerge } from '@deriv/quill-design';
import TradingSpecTable from './table/trading-spec-table';

export function TradeTemplate() {
  return (
    <PageLayout>
      <Hero.ContentLess title="Leveraged forex on Deriv MT5">
        <Text
          size="xl"
          className={qtMerge('text-center text-typography-default')}
        >
          Deriv MT5 offers various trading assets on the forex market via a
          single platform.
        </Text>
      </Hero.ContentLess>
      <TradingSpecTable />
    </PageLayout>
  );
}

export default TradeTemplate;
