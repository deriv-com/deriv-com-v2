import { Meta, StoryObj } from '@storybook/react';
import { SearchBlock, SearchBlockProps } from '.';
import { useState } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { searchString } from '@deriv-com/utils';
import { CustomLink } from '@deriv-com/components';
import { Text } from '@deriv/quill-design';

const meta: Meta<SearchBlockProps> = {
  title: 'Blocks/SearchBlock',
  component: SearchBlock,
} satisfies Meta<typeof SearchBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

type SearchResults = {
  header: string;
  elements: string[];
};

export const Mockdata: SearchResults[] = [
  {
    header: 'Account',
    elements: [
      'How can I change my personal details?',
      'Can I change the currency of my account?',
      'Can I change my email address?',
      'I forgot my Google/Facebook/Apple account password. How can I log in to my Deriv account?',
      'How can I close my account?',
      'How do I unsubscribe from marketing emails?',
      'What is a dormant fee?',
      'Can I open a corporate or business account?',
      'Do I need to pay taxes on my trades/profits?',
      'Can I open more than one Deriv account?',
    ],
  },
];
const Content = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResults[]>([]);
  const showSearchResults = (query: string) => {
    const finalMatches: SearchResults[] = [];

    Mockdata.forEach(({ header, elements }) => {
      const matches = searchString(query, elements);

      if (matches.length) {
        finalMatches.push({
          header,
          elements: matches,
        });
      }
    });

    setResults(finalMatches);
    setQuery(query);
  };
  return (
    <SearchBlock
      placeholder="Try “Trade“"
      showSearchResults={showSearchResults}
      onChange={(e) => setQuery(e)}
      content={
        query !== '' && (
          <div className="flex flex-col items-start">
            <Text size="lg" bold className="w-full break-all py-general-xl">
              Results for “{query}”
            </Text>
            {results.length > 0 && (
              <div className="flex flex-col gap-general-lg pb-2400">
                {results.map(({ elements }) =>
                  elements.map((item) => {
                    return (
                      <CustomLink key={item} href="" className="justify-start">
                        {item}
                      </CustomLink>
                    );
                  }),
                )}
              </div>
            )}

            {!results.length && query && (
              <div className="flex w-full justify-center py-general-2xl">
                <Text size="lg" className="break-all">
                  Sorry, we couldn’t find any results with "{query}" in it
                </Text>
              </div>
            )}
          </div>
        )
      }
    />
  );
};
export const Default: Story = {
  render: () => <Content />,
};
