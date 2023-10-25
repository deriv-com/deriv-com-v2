import { Features } from '@deriv-com/blocks';
import { CardsFAQ } from './data';

const QuestionCardSection = () => {
  return <Features.Card variant="ContentLeft" cards={CardsFAQ} cols="three" />;
};

export default QuestionCardSection;
