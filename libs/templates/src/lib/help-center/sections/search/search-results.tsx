import { SearchBlock } from '@deriv-com/blocks';
import { FAQData } from './data';
import { CustomLink } from '@deriv-com/components';
import { useState } from 'react';
import { searchString } from '@deriv-com/utils';
import { FAQSearchResults } from '../../types';
import { getHelpCentreLink } from './components';

export type SearchResultsProps = {
  onSearchKeyChange: (searchKey: string) => void;
};

export const SearchResults = ({ onSearchKeyChange }: SearchResultsProps) => {
  const [results, setResults] = useState<FAQSearchResults[]>([]);

  const showSearchresults = (query: string) => {
    const final_matches: FAQSearchResults[] = [];

    FAQData.forEach(({ header, questions }) => {
      const matches = searchString(query, questions);

      if (matches.length) {
        final_matches.push({
          header,
          questions: matches,
        });
      }
    });

    setResults(final_matches);
    onSearchKeyChange(query);
  };

  return (
    <SearchBlock
<<<<<<< HEAD
      searchPlaceholder='Try "Trade"'
=======
>>>>>>> dc0b2a4 (fix: updated search block)
      showSearchresults={showSearchresults}
      content={
        <div className="flex flex-col items-start gap-general-md">
          {results.map(({ header, questions }) =>
            questions.map((question) => {
              return (
                <CustomLink
                  key={question}
                  href={getHelpCentreLink(header, question)}
                  className="justify-start"
                >
                  {question}
                </CustomLink>
              );
            }),
          )}
        </div>
      }
    />
  );
};
