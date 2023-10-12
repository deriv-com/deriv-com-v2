import { Hero } from '@deriv-com/blocks';
import { PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';
import TradingSpecTable from './table/trading-spec-table';

export function TradeTemplate() {
  return (
    <PageLayout>
      <FluidContainer>
        <Hero.ContentLess
          title="Leveraged forex on Deriv MT5"
          description={`Deriv MT5 offers various trading assets on the forex market via a single platform.`}
        >
          <input placeholder="Search" />
        </Hero.ContentLess>
        <TradingSpecTable />
      </FluidContainer>
    </PageLayout>
  );
}

export default TradeTemplate;
