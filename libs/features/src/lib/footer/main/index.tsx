import { Footer } from '@deriv-com/blocks';
import { footerData } from './data';
import { MainDescriptionContent } from './main.description.content';

export const MainFooter = () => {
  return (
    <Footer.FooterBlock descriptionContent={MainDescriptionContent}>
      <Footer.MainNavContent items={footerData} />
    </Footer.FooterBlock>
  );
};

export default MainFooter;
