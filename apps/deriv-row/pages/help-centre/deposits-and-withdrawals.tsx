import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterDepositTemplate } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterDepositTemplate />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
