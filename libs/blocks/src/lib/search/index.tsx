import { CustomLink, SearchChip } from '@deriv-com/components';
import { searchString } from '@deriv-com/utils';
import { Text } from '@deriv/quill-design';
import { useState } from 'react';
import { getHelpCentreLink } from 'libs/templates/src/lib/help-center/sections/search/components';

type SearchResults = {
  header: string;
  questions: string[];
};

export type SearchBlockProps = {
  data: SearchResults[];
  onSearchKeyChange: (searchKey: string) => void;
};

export const SearchBlock = ({ data, onSearchKeyChange }: SearchBlockProps) => {
  const [search_key, setSearchKey] = useState('');
  const [results, setResults] = useState<SearchResults[]>([]);

  const showSearchresults = (query: string) => {
    const final_matches: SearchResults[] = [];

    data.forEach(({ header, questions }) => {
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
    onSearchKeyChange(query);
  };
  return (
    <>
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
              <div className="flex justify-center py-general-2xl">
                <Text size="lg">
                  Sorry, we couldn’t find any results with "{search_key}" in it
                </Text>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default SearchBlock;
