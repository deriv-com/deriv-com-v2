// eslint-disable-next-line @nx/enforce-module-boundaries
import { Features, SearchBlock } from '@deriv-com/blocks';
import { CardsFAQ, FAQData } from './data';
import { FluidContainer } from '@deriv/quill-design';
import { useState } from 'react';

interface SearchSectionProps {
  hasQuestionCards?: boolean;
}

const SearchSection = ({ hasQuestionCards = true }: SearchSectionProps) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearchKeyChange = (searchKey: string) => {
    setSearchKey(searchKey);
  };
  return (
    <FluidContainer className="flex w-full flex-col items-center">
      <SearchBlock data={FAQData} onSearchKeyChange={handleSearchKeyChange} />
      {!searchKey && hasQuestionCards && (
        <Features.Card variant="ContentLeft" cards={CardsFAQ} cols="three" />
      )}
    </FluidContainer>
  );
};

export default SearchSection;
