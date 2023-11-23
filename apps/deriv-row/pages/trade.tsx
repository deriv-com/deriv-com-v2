import { Footer, Navigation } from '@deriv-com/features';
import { TradeTemplate } from '@deriv-com/templates';

export const TradePage = () => {
  return (
    <>
      <Navigation.Main />
      <TradeTemplate />
      <Footer.Main />
    </>
  );
};

export default TradePage;
