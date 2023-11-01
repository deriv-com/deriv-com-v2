import { PageLayout } from '@deriv-com/components';
import SearchSection from './sections/search';
import HelpCardSection from './sections/help-cards';
import AnswerSection from './sections/answers';
import { FAQData } from './sections/search/data';
import { FAQDataType } from './types';

export function HelpCenterDepositTemplate() {
  const data = FAQData.find(
    ({ header }) => header === 'Deposits and withdrawals',
  );
  return (
    <PageLayout>
      <SearchSection hasQuestionCards={false} />
      <AnswerSection {...(data as FAQDataType)} />
      <HelpCardSection />
    </PageLayout>
  );
}

export default HelpCenterDepositTemplate;
