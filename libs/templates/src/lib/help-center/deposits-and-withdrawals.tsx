import { Breadcrumbs, PageLayout } from '@deriv-com/components';
import SearchSection from './sections/search';
import HelpCardSection from './sections/help-cards';
import AnswerSection from './sections/answers';
import { FAQData } from './sections/search/data';
import { FAQDataType } from './types';
import { FluidContainer } from '@deriv/quill-design';

export function HelpCenterDepositTemplate() {
  const data = FAQData.find(
    ({ header }) => header === 'Deposits and withdrawals',
  );
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
              content: 'Deposits and withdrawals',
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

export default HelpCenterDepositTemplate;
