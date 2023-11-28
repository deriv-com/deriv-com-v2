import { Footer } from '@deriv-com/blocks';
import { footerData } from './data';
import { DescriptionContent } from './description';

export const MainFooter = () => {
  return (
    <Footer.FooterBlock descriptionContent={DescriptionContent}>
      <Footer.MainNavContent items={footerData} />
    </Footer.FooterBlock>
  );
};

export default MainFooter;
