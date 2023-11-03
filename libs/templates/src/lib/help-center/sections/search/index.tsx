import { Features } from '@deriv-com/blocks';
import { CardsFAQ, FAQData } from './data';
import { CustomLink, SearchChip } from '@deriv-com/components';
import { FluidContainer, Text } from '@deriv/quill-design';
import { useState } from 'react';
import { searchString } from '@deriv-com/utils';
import { FAQSearchResults } from '../../types';
import { getHelpCentreLink } from './components';

interface SearchSectionProps {
  hasQuestionCards?: boolean;
}

const SearchSection = ({ hasQuestionCards = true }: SearchSectionProps) => {
  const [search_key, setSearchKey] = useState('');
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

    setSearchKey(query);
  };

  return (
    <FluidContainer className="flex w-full flex-col items-center">
      <section className="flex w-full max-w-[1024px] flex-col gap-general-xl py-general-xl ">
        <SearchChip
          placeholder='Try "Trade"'
          onChange={(value) => showSearchresults(value)}
          className="w-full "
          inputClassName="!bg-gradient-slate-110"
        />
        {search_key && (
          <div className="flex flex-col gap-general-xl">
            <Text size="lg">Results for “{search_key}”</Text>
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
            {!results.length && (
              <div className="flex justify-center py-general-5xl pt-general-none">
                <Text size="lg">
                  Sorry, we couldn’t find any results with "{search_key}" in it
                </Text>
              </div>
            )}
          </div>
        )}
      </section>
      {!search_key && hasQuestionCards && (
        <Features.Card
          variant="ContentLeft"
          cards={CardsFAQ}
          cols="three"
          className="mt-general-4xl py-general-none"
        />
      )}
    </FluidContainer>
  );
};

export default SearchSection;
