import { Footer } from '@deriv-com/blocks';
import { footerNavData, socialButtons, warnText } from './data';
import { DerivGoBanner } from './deriv-go-banner';
import { DescriptionContent } from './description';
import { IIPAward } from './iip-award';

export const ROWFooter = () => {
  return (
    <Footer.FooterBlock
      warningText={warnText}
      socialButtons={socialButtons}
      banner={DerivGoBanner}
      descriptionContent={DescriptionContent}
      awards={IIPAward}
    >
      <Footer.MainNavContent items={footerNavData} cols="six" />
    </Footer.FooterBlock>
  );
};

export default ROWFooter;
