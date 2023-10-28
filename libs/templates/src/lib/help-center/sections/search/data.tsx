import {
  CardContent,
  CustomLink,
  CustomLinkProps,
} from '@deriv-com/components';
import { slugify } from '@deriv-com/utils';
import { Text, TextProps, qtMerge } from '@deriv/quill-design';
import { FAQDataType } from '../../types';
import { PropsWithChildren, ReactNode } from 'react';

const card_setting: Partial<CardContent> = {
  size: 'sm',
  color: 'gray',
  align: 'start',
};

export const getHelpCentreLink = (page: string, sub_page?: string) => {
  const sub_link = sub_page ? `#${slugify(sub_page)}` : '';
  return `help-centre/${slugify(page)}${sub_link}`;
};

const generateFaqs = (questions: string[], header: string) => {
  return (
    <div className="flex min-h-[212px] flex-col items-start">
      <div className="flex flex-col gap-general-md">
        {questions.map((question) => (
          <CustomLink
            key={question}
            href={getHelpCentreLink(header, question)}
            className="justify-start"
          >
            {question}
          </CustomLink>
        ))}
      </div>
      <div className="mt-auto flex">
        <CustomLink href={getHelpCentreLink(header)} hasIcon hasHoverColor>
          View Questions
        </CustomLink>
      </div>
    </div>
  );
};

const FaqBox = ({
  variant = 'lg',
  children,
}: { variant?: 'sm' | 'md' | 'lg' } & PropsWithChildren) => (
  <div
    className={qtMerge(
      'flex flex-col',
      variant === 'sm' && 'gap-general-2xs',
      variant === 'md' && 'gap-general-xs',
      variant === 'lg' && 'gap-general-lg',
    )}
  >
    {children}
  </div>
);
const FaqText = ({ children, ...otherProps }: TextProps) => (
  <Text {...otherProps} size="md">
    {children}
  </Text>
);
const FaqLink = ({ children, href }: CustomLinkProps) => (
  <CustomLink className="m-200 inline w-fit" hasLinkColor size="md" href={href}>
    {children}
  </CustomLink>
);
const FaqList = ({
  data,
  variant = 'bullet',
}: {
  data: ReactNode[];
  variant?: 'decimal' | 'bullet' | 'none';
}) => (
  <ul
    className={qtMerge(
      'list-outside',
      variant === 'bullet' && 'list-disc',
      variant === 'decimal' && 'list-decimal',
      variant === 'none' && 'list-none',
      'flex flex-col gap-general-xs pl-general-xl text-opacity-black-800',
    )}
  >
    {data.map((d, k) => (
      <li key={`${d}-${k}`}>{d}</li>
    ))}
  </ul>
);

const faqCardsMaxItems = [3, 2, 3, 3, 3, 3, 2];

export const FAQData: FAQDataType[] = [
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
      'Why do I need to verify my account?',
      'Can I trade without verifying my account?',
      'How long does verification take?',
      'Why were my documents declined?',
      'Is there any system/website maintenance going on?',
    ],
    answers: [
      () => (
        <FaqText>
          You can do so on the
          <FaqLink href="https://app.deriv.com/account/personal-details">
            Personal details page.
          </FaqLink>
          If you’re unable to update your details, please contact us via live
          chat. We may need you to send us some documents for verification.
        </FaqText>
      ),
      () => <FaqText>No, you can’t.</FaqText>,
      () => (
        <FaqBox>
          <FaqText>
            Yes, you can change your email address
            <FaqLink href="https://app.deriv.com/account/passwords">
              here
            </FaqLink>
            . If you encounter any issues, please contact us via{' '}
            <FaqLink href="https://deriv.com/contact_us?is_livechat_open=true">
              live chat
            </FaqLink>
            .
          </FaqText>

          <FaqText>
            <strong>Note: </strong>
            If you have lost access to your registered email address, we won’t
            be able to change it on our end. Contact your email service provider
            for assistance in regaining access to your email. Once you have
            regained access to it, follow the steps above to change your email
            address on Deriv.
          </FaqText>

          <FaqBox variant="sm">
            <FaqText variant="bold">Why can't I create an account?</FaqText>
            <FaqText>
              Here are some possible reasons you aren't able to create an
              account:
            </FaqText>
            <FaqList
              data={[
                <FaqText>You’re below 18 years old.</FaqText>,
                <FaqText>You may already have a Deriv account.</FaqText>,
              ]}
            />
          </FaqBox>
          <FaqText>
            You may refer to
            <FaqLink href="https://deriv.com/tnc/general-terms.pdf">
              our terms
            </FaqLink>
            for more information. If you need help getting into your account,
            <FaqLink href="https://deriv.com/contact_us/?is_livechat">
              contact us via live chat.
            </FaqLink>
          </FaqText>
        </FaqBox>
      ),
      () => (
        <FaqBox>
          <FaqText>
            If you created your Deriv account using Apple/Google/Facebook, try
            resetting your Apple/Google/Facebook password. After that, you
            should be able to log in to Deriv as usual.
          </FaqText>
          <FaqBox variant="md">
            <FaqText>
              If you'd like to log in using your email address instead, follow
              these steps:
            </FaqText>
            <FaqList
              variant="decimal"
              data={[
                <FaqText>
                  Hit
                  <FaqLink href="https://deriv.com/reset-password">
                    Forgot password?
                  </FaqLink>
                  on the
                  <FaqLink href="https://oauth.deriv.com/oauth2/authorize?app_id=16929">
                    login page.
                  </FaqLink>
                </FaqText>,
                <FaqText>
                  Enter the same email address you use for your
                  Apple/Google/Facebook account.
                </FaqText>,
                <FaqText>
                  We'll email you a verification link. Click that link and set a
                  new password for your Deriv account.
                </FaqText>,
                <FaqText>
                  Now, you'll be able to log in to your Deriv account using your
                  email address and password.
                </FaqText>,
              ]}
            />
          </FaqBox>
        </FaqBox>
      ),
      () => (
        <FaqBox>
          <FaqText>
            Before closing your account, please close all your open positions
            and withdraw all the funds in your account.
          </FaqText>
          <FaqText>
            Then,
            <FaqLink href="https://app.deriv.com/account/deactivate-account">
              click here
            </FaqLink>
            to close your account.
          </FaqText>
          <FaqText>
            If you have questions or need help, please contact us via
            <FaqLink href="https://deriv.com/?is_livechat_open=true">
              live chat.
            </FaqLink>
          </FaqText>
        </FaqBox>
      ),
      () => (
        <FaqText>
          You can unsubscribe by going to the{' '}
          <FaqLink href="https://app.deriv.com/account/personal-details">
            Personal details
          </FaqLink>
          page. Uncheck the checkbox that says "Get updates about Deriv
          products, services and events." at the bottom of the page, and click
          <strong> Submit</strong>.
        </FaqText>
      ),
      () => (
        <FaqText>
          It's a fee that we charge for accounts that have been inactive for the
          last 12 months. Refer to
          <FaqLink href="https://deriv.com/tnc/general-terms.pdf">
            our terms
          </FaqLink>
          for more info.
        </FaqText>
      ),
      () => <FaqText>No, you can’t.</FaqText>,
      () => (
        <FaqText>
          If you’re trading in Hong Kong, you don’t need to pay tax on your
          trades/profits.
        </FaqText>
      ),
      () => <FaqText>No, you can’t.</FaqText>,
      () => (
        <FaqText>
          You can do so on the
          <FaqLink href="https://app.deriv.com/account/self-exclusion">
            Self-exclusion
          </FaqLink>
          page.
        </FaqText>
      ),
      () => (
        <FaqText>
          You can adjust or remove your limits on the
          <FaqLink href="https://app.deriv.com/account/self-exclusion">
            Self-exclusion
          </FaqLink>
          page. If you’re unable to change your limits,
          <FaqLink href="https://deriv.com/contact_us/?is_livechat_open=true">
            let us know via live chat.
          </FaqLink>
        </FaqText>
      ),
      () => (
        <FaqText>
          You may reactivate your account by
          <FaqLink href="https://oauth.deriv.com/oauth2/authorize?app_id=16929">
            logging in
          </FaqLink>
          with your email address and password. If you're unable to do so,
          please
          <FaqLink href="https://deriv.com/contact_us/?is_livechat_open=true">
            contact us via live chat
          </FaqLink>
          , and we'll help you further.
        </FaqText>
      ),
      () => (
        <FaqText>
          We’ll prompt you to verify your account when it’s needed.
        </FaqText>
      ),
      () => (
        <FaqBox>
          <FaqText>
            When we prompt you to verify your account, follow these steps:
          </FaqText>
          <FaqList
            variant="decimal"
            data={[
              <FaqText>
                <FaqLink href="https://oauth.deriv.com/oauth2/authorize?app_id=16929">
                  Log in
                </FaqLink>
                to your Deriv account.
              </FaqText>,
              <FaqText>
                <FaqLink href="https://oauth.deriv.com/oauth2/authorize?app_id=16929">
                  Log in
                </FaqLink>
                to your Deriv account.
              </FaqText>,
              <FaqText>
                Go to
                <FaqLink href="https://app.deriv.com/account/personal-details">
                  Settings &gt;
                </FaqLink>
                <strong>Proof of identity</strong> or {''}
                <strong>Proof of address.</strong>
              </FaqText>,
            ]}
          />
          <FaqText>
            <strong>Note:</strong> The Proof of identity and Proof of address
            pages will not be available if your account doesn’t need
            verification at this time.
          </FaqText>
        </FaqBox>
      ),
      () => (
        <FaqBox>
          <FaqText>
            You’ll need the following documents to verify your account:
          </FaqText>
          <FaqList
            data={[
              <FaqBox variant="md">
                <FaqText variant="bold">Proof of identity</FaqText>
                <FaqText>
                  You’ll need a valid government-issued identity document such
                  as a Hong Kong ID card or passport. Your document must clearly
                  show your name, photo, and date of birth.
                </FaqText>
              </FaqBox>,
              <FaqBox variant="md">
                <FaqText variant="bold">Proof of address</FaqText>
                <FaqText>
                  You’ll need a bank statement, credit card statement, tax
                  statement, or utility bill. Your document must be issued
                  within the last 6 months. It must contain your name, address,
                  the name of the company that issued the document, and the
                  issue date.
                </FaqText>
              </FaqBox>,
            ]}
          />
        </FaqBox>
      ),
      () => (
        <FaqBox>
          <FaqText>
            Our regulators require us to verify your account in accordance with
            anti-money laundering (AML) and Know Your Customer (KYC) laws. If we
            have prompted you to upload your documents to verify your account,
            you'll only be able to continue using our services after your
            account is verified.
          </FaqText>
          <FaqText>
            For further information, you may check our
            <FaqLink href="For further information, you may check our Terms and conditions.">
              Terms and conditions.
            </FaqLink>
          </FaqText>
        </FaqBox>
      ),
      () => <FaqText>No, you can’t.</FaqText>,
      () => (
        <FaqBox>
          <FaqText>
            We try to review your verification documents within the same day. In
            some cases, due to high traffic, it may take up to 3 business days.
            You’ll get a confirmation email from us once the review is complete.
            You can also check the status of your documents at
          </FaqText>
          <FaqLink href="https://app.deriv.com/account/proof-of-identity">
            Settings &gt; Proof of identity
          </FaqLink>
          <FaqLink href="https://app.deriv.com/account/proof-of-address">
            Settings &gt; Proof of address
          </FaqLink>
        </FaqBox>
      ),
      () => (
        <FaqText>
          We may have declined your documents because they were unclear,
          invalid, expired, had cropped edges, or showed details that did not
          match your Deriv profile. If you need help, please{' '}
          <FaqLink href="https://deriv.com/contact_us/?is_livechat_open=true">
            contact us via live chat.
          </FaqLink>
        </FaqText>
      ),
      () => (
        <FaqText>
          Check our
          <FaqLink href="https://deriv.statuspage.io/">Status page</FaqLink> to
          see if there is any system or website maintenance going on.
        </FaqText>
      ),
    ],
  },
  {
    header: 'Trading',
    questions: ['What is forex?', 'What are the trading limits on my account?'],
  },
  {
    header: 'Deposits and withdrawals',
    questions: [
      'What payment methods can I use for deposits and withdrawals?',
      'How long does it take for my deposits and withdrawals to be processed?',
      'What is the minimum deposit or withdrawal amount?',
    ],
  },
  {
    header: 'Security',
    questions: [
      'Do I need to verify my Deriv account?',
      'How long does verification take?',
      'Why were my documents declined?',
    ],
  },
  {
    header: 'Complaints procedure',
    questions: [
      'What is a complaint?',
      'How can I submit a complaint?',
      'What information should I include when making a complaint?',
    ],
  },
  {
    header: 'Deriv MT5',
    questions: [
      'What is Deriv MetaTrader 5 (Deriv MT5)?',
      'How long does it take for my deposits and withdrawals to be processed?',
      'Why are my Deriv MT5 login details different from my Deriv login details?',
    ],
  },
  {
    header: 'About Deriv',
    questions: ['Is Deriv regulated?', 'Where is my money held?'],
  },
];

export const CardsFAQ = [...FAQData].map(({ header, questions }, faqKey) => {
  const trimmed_questions = [...questions];

  trimmed_questions.length = faqCardsMaxItems[faqKey];

  return {
    header,
    children: generateFaqs(trimmed_questions, header),
    ...card_setting,
  };
}) as CardContent[];
