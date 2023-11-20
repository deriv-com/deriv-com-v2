import type { Meta, StoryObj } from '@storybook/react';
import SearchBlock from '.';

const meta = {
  title: 'Blocks/SearchBlock',
  component: SearchBlock,
} satisfies Meta<typeof SearchBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Try "Trade"',
    content: (
      <div className="flex flex-col items-start gap-general-md">
        FAQ Question
      </div>
    ),
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import SearchBlock from '.';
import { Text } from '@deriv/quill-design';
import { FAQDataType } from 'libs/templates/src/lib/help-center/types';
import { CustomLink } from '@deriv-com/components';
import { getHelpCentreLink } from 'libs/templates/src/lib/help-center/sections/search/components';

const meta = {
  title: 'Blocks/SearchBlock',
  component: SearchBlock,
} satisfies Meta<typeof SearchBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleSearchKeyChange = (value: string) => {
  return value;
};

const searchKey = 'email';
const noSearchKey = 'asdd';
const results: FAQDataType[] = [
  {
    header: 'Account',
    questions: [
      'Can I change my email address?',
      'How do I unsubscribe from marketing emails?',
    ],
  },
];

export const Default: Story = {
  args: {
    placeholder: 'Try “Trade“',
    onChange: handleSearchKeyChange,
    showSearchResults: handleSearchKeyChange,
    content: (
      <div className="flex flex-col items-start">
        <Text size="lg" bold className="w-full break-all py-general-xl">
          Results for “{searchKey}”
        </Text>
        {results.length > 0 && (
          <div className="flex flex-col gap-general-lg pb-2400">
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
        )}
      </div>
    ),
  },
};

export const NoResults: Story = {
  args: {
    placeholder: 'Try “Trade“',
    showSearchResults: handleSearchKeyChange,
    onChange: handleSearchKeyChange,
    content: (
      <div className="flex w-full justify-center py-general-2xl">
        <Text size="lg" className="break-all">
          Sorry, we couldn’t find any results with "{noSearchKey}" in it
        </Text>
      </div>
    ),
  },
};
