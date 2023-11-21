import { Footer } from '@deriv-com/blocks';
import { footerDataROW, socialButtonsROW, warnTextROW } from './data';
import { DerivGoBannerAndAwards } from './banner-and-awards';

export const ROWFooter = () => {
  return (
    <Footer.FooterBlock
      warningText={warnTextROW}
      socialButtons={socialButtonsROW}
      bannerAndAwards={DerivGoBannerAndAwards}
    >
      <Footer.MainNavContent items={footerDataROW} cols="six" />
    </Footer.FooterBlock>
  );
};

export default ROWFooter;
