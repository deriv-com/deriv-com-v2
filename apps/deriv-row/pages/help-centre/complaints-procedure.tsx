import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterComplaintsTemplate } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterComplaintsTemplate />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
