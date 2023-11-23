import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterTemplate } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterTemplate />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
