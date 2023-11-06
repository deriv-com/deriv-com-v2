import { Features } from '@deriv-com/blocks';
import { FluidContainer } from '@deriv/quill-design';
import { useState } from 'react';
import { CardsFAQ } from './data';
import { SearchResults } from './search-results';

interface SearchSectionProps {
  hasQuestionCards?: boolean;
}
const SearchSection = ({ hasQuestionCards = true }: SearchSectionProps) => {
  const [search_key, setSearchKey] = useState('');
  const handleSearchKeyChange = (searchKey: string) => {
    setSearchKey(searchKey);
  };
  return (
    <FluidContainer className="flex w-full flex-col items-center">
      <SearchResults onSearchKeyChange={handleSearchKeyChange} />
      {!search_key && hasQuestionCards && (
        <Features.Card
          variant="ContentLeft"
          cards={CardsFAQ}
          cols="three"
          className="mt-general-4xl py-general-none pb-general-4xl"
        />
      )}
    </FluidContainer>
  );
};

export default SearchSection;
