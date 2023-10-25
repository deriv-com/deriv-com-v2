import { CardContent } from '@deriv-com/components';
import { Text } from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';

const card_setting: Partial<CardContent> = {
  size: 'sm',
  color: 'gray',
  align: 'start',
};

const generateFaqs = (questions: string[], link: string) => {
  return (
    <div className="flex min-h-[212px] flex-col">
      <div className="flex flex-col gap-general-md">
        {questions.map((question) => (
          <Text key={question} className="hover:underline">
            {question}
          </Text>
        ))}
      </div>
      <div className="mt-auto flex">
        <Text size="sm">View Questions</Text>
        <StandaloneChevronRightRegularIcon iconSize="sm" />
      </div>
    </div>
  );
};

export const CardsFAQ = [
  {
    header: 'Account',
    children: generateFaqs(
      [
        'How can I change my personal details?',
        'Can I change the currency of my account?',
        'Can I change my email address?',
      ],
      '#',
    ),
    ...card_setting,
  },
  {
    header: 'Trading',
    children: generateFaqs(
      ['What is forex?', 'What are the trading limits on my account?'],
      '#',
    ),
    ...card_setting,
  },
  {
    header: 'Deposits and withdrawals',
    children: generateFaqs(
      [
        'What payment methods can I use for deposits and withdrawals?',
        'How long does it take for my deposits and withdrawals to be processed?',
        'What is the minimum deposit or withdrawal amount?',
      ],
      '#',
    ),
    ...card_setting,
  },
  {
    header: 'Security',
    children: generateFaqs(
      [
        'Do I need to verify my Deriv account?',
        'How long does verification take?',
        'Why were my documents declined?',
      ],
      '#',
    ),
    ...card_setting,
  },
  {
    header: 'Complaints procedure',
    children: generateFaqs(
      [
        'What is a complaint?',
        'How can I submit a complaint?',
        'What information should I include when making a complaint?',
      ],
      '#',
    ),
    ...card_setting,
  },
  {
    header: 'Deriv MT5',
    children: generateFaqs(
      [
        'What is Deriv MetaTrader 5 (Deriv MT5)?',
        'How long does it take for my deposits and withdrawals to be processed?',
        'Why are my Deriv MT5 login details different from my Deriv login details?',
      ],
      '#',
    ),
    ...card_setting,
  },
  {
    header: 'About Deriv',
    children: generateFaqs(
      ['Is Deriv regulated?', 'Where is my money held?'],
      '#',
    ),
    ...card_setting,
  },
] as CardContent[];
