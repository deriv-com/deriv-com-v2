import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterAboutTemplate } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterAboutTemplate />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
