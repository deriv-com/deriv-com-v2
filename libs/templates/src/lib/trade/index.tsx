import { Hero } from '@deriv-com/blocks';
import { PageLayout } from '@deriv-com/components';
import { FluidContainer } from '@deriv/quill-design';

export function TradeTemplate() {
  return (
    <PageLayout>
      <FluidContainer>
        <Hero.ContentLess
          title="Leveraged forex on the world’s favorite trading platform"
          description={`Deriv MT5 offers various trading assets on the forex market via a single platform.`}
        />
      </FluidContainer>
    </PageLayout>
  );
}

export default TradeTemplate;
