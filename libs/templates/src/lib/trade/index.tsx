import { Hero } from '@deriv-com/blocks';
import { PageLayout } from '@deriv-com/components';
import TradingSpecTable from './table/trading-spec-table';
import { qtMerge, Text } from '@deriv/quill-design';

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
        <TradingSpecTable />
      </Hero.ContentLess>
    </PageLayout>
  );
}

export default TradeTemplate;
