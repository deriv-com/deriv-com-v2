import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterSecurityTemplate } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterSecurityTemplate />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
