import { Hero } from '@deriv-com/blocks';
import { PageLayout } from '@deriv-com/components';
import TradingSpecTable from './table/trading-spec-table';

export function TradeTemplate() {
  return (
    <PageLayout>
      <Hero.ContentLess
        title="Leveraged forex on Deriv MT5"
        description={`Deriv MT5 offers various trading assets on the forex market via a single platform.`}
      >
        <TradingSpecTable />
      </Hero.ContentLess>
    </PageLayout>
  );
}

export default TradeTemplate;
