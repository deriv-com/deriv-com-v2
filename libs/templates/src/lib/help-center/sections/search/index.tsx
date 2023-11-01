// eslint-disable-next-line @nx/enforce-module-boundaries
import { SearchBlock } from '@deriv-com/blocks';
import { CardsFAQ, FAQData } from './data';
import { FluidContainer } from '@deriv/quill-design';

interface SearchSectionProps {
  hasQuestionCards?: boolean;
}

const SearchSection = ({ hasQuestionCards = true }: SearchSectionProps) => {
  return (
    <FluidContainer className="flex w-full flex-col items-center">
      <SearchBlock
        FAQdata={FAQData}
        hasQuestionCards={hasQuestionCards}
        CardsFAQ={CardsFAQ}
      />
    </FluidContainer>
  );
};

export default SearchSection;
