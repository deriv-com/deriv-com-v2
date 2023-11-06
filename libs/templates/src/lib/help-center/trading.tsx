import { Breadcrumbs, PageLayout } from '@deriv-com/components';
import SearchSection from './sections/search';
import HelpCardSection from './sections/help-cards';
import AnswerSection from './sections/answers';
import { FAQData } from './sections/search/data';
import { FAQDataType } from './types';
import { FluidContainer } from '@deriv/quill-design';

export function HelpCenterTradingTemplate() {
  const data = FAQData.find(({ header }) => header === 'Trading');
  return (
    <PageLayout>
      <FluidContainer>
        <Breadcrumbs
          className="py-general-md"
          links={[
            {
              content: 'Home',
              href: '/',
            },
            {
              content: 'Help Centre',
              href: '/help-centre',
            },
            {
              content: 'Trading',
              href: '',
            },
          ]}
        />
      </FluidContainer>
      <SearchSection hasQuestionCards={false} />
      <AnswerSection {...(data as FAQDataType)} />
      <HelpCardSection />
    </PageLayout>
  );
}

export default HelpCenterTradingTemplate;
