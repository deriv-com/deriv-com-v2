import { Hero } from '@deriv-com/blocks';
import { PageLayout } from '@deriv-com/components';
import { Text } from '@deriv/quill-design';
import TradingSpecTable from './table/trading-spec-table';
import AppDownload from './app-download';

export function TradeTemplate() {
  return (
    <PageLayout>
      <Hero.ContentLess title="Leveraged forex on Deriv MT5">
        <Text size="xl" className="text-center text-typography-default">
          Deriv MT5 offers various trading assets on the forex market via a
          single platform.
        </Text>
      </Hero.ContentLess>
      <TradingSpecTable />
      <AppDownload />
    </PageLayout>
  );
}

export default TradeTemplate;
