import { Footer, Navigation } from '@deriv-com/features';
import { HelpCenterMT5Template } from '@deriv-com/templates';
const HelpCenterPage = () => {
  return (
    <>
      <Navigation.Main />
      <HelpCenterMT5Template />
      <Footer.Main />
    </>
  );
};

export default HelpCenterPage;
