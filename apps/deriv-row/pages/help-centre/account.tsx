import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterAccountTemplate } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterAccountTemplate />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
