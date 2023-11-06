import { Footer, Navigation } from '@deriv-com/features';
import { WhoWeAreTemplate } from '@deriv-com/templates';

export const WhoWeArePage = () => {
  return (
    <>
      <Navigation.Main />
      <WhoWeAreTemplate />
      <Footer.Main />
    </>
  );
};

export default WhoWeArePage;
