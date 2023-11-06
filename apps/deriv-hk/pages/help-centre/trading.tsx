import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterTradingTemplate } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterTradingTemplate />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
