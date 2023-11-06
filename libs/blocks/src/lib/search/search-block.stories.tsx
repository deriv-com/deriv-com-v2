import type { Meta, StoryObj } from '@storybook/react';
import SearchBlock from '.';
import { CustomLink } from '../../../../components/src';
import { getHelpCentreLink } from '../../../../templates/src/lib/help-center/sections/search/components';

const meta = {
  title: 'Blocks/SearchBlock',
  component: SearchBlock,
} satisfies Meta<typeof SearchBlock>;

export default meta;
type Story = StoryObj<typeof meta>;
const FAQData = [
  {
    header: 'Account',
    questions: [
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
      'How can I set self-exclusion limits on my account?',
      'How can I adjust or remove my self-exclusion limits?',
      'How can I reactivate my Deriv account?',
      'When do I need to verify my account?',
      'How do I verify my account?',
      'What documents do I need to verify my account?',
    ],
  },
];

export const Default: Story = {
  args: {
    content: (
      <div className="flex flex-col items-start gap-general-md">
        {FAQData.map(({ header, questions }) =>
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
    ),
  },
};
