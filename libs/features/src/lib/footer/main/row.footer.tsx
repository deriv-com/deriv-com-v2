import { Footer } from '@deriv-com/blocks';
import { footerDataROW, socialButtonsROW, warnTextROW } from './data';

export const ROWFooter = () => {
  return (
    <Footer.FooterBlock
      warningText={warnTextROW}
      socialButtons={socialButtonsROW}
    >
      <Footer.MainNavContent items={footerDataROW} cols="six" />
    </Footer.FooterBlock>
  );
};

export default ROWFooter;
