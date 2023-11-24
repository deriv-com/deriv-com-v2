import { CardContent } from '@deriv-com/components';

import { FAQDataType } from '../../types';

import { cardSetting, faqCardsMaxItems } from './types';
import {
  FaqBox,
  FaqLink,
  FaqList,
  FaqText,
  FaqImage,
  generateFaqs,
} from './components';

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

          <FaqBox>
            <FaqText bold>Why can't I create an account?</FaqText>
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
          <FaqBox>
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
              <FaqBox>
                <FaqText bold>Proof of identity</FaqText>
                <FaqText>
                  You’ll need a valid government-issued identity document such
                  as a Hong Kong ID card or passport. Your document must clearly
                  show your name, photo, and date of birth.
                </FaqText>
              </FaqBox>,
              <FaqBox>
                <FaqText bold>Proof of address</FaqText>
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
          match your Deriv profile. If you need help, please
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
    answers: [
      () => (
        <FaqText>
          Foreign exchange, or forex, is the global market of the world’s
          currencies, where the values of different currencies are pitted
          against each other in the form of forex pairs, such as EUR/USD,
          AUD/JPY, etc. The forex market determines the exchange rates of each
          currency.
        </FaqText>
      ),
      () => (
        <FaqText>
          To see your account’s trading limits, go to{' '}
          <strong>
            Settings &gt; Security and safety &gt;
            <FaqLink href="https://app.deriv.com/account/account-limits">
              Account limits.
            </FaqLink>
          </strong>
        </FaqText>
      ),
    ],
  },
  {
    header: 'Deposits and withdrawals',
    questions: [
      'What payment methods can I use for deposits and withdrawals?',
      'How long does it take for my deposits and withdrawals to be processed?',
      'What is the minimum deposit or withdrawal amount?',
      'My withdrawal verification link has expired. What should I do?',
      'What conversion rates do you use for deposits and withdrawals?',
      'How can I cancel my withdrawal?',
      `Can I deposit with my friend's/family member's bank account?`,
      `Why can't I see any payment methods on the Withdrawal page?`,
      `Can I transfer the funds in my account to another person's account?`,
    ],
    answers: [
      () => (
        <FaqText>
          You can use cheques, online banking, and payment agents for deposits
          and withdrawals (see our
          <FaqLink href="https://deriv.com/payment-methods/">
            Payment methods page
          </FaqLink>{' '}
          for a detailed list). Once you log in to your Deriv account, you’ll be
          able to see payment methods available in your country on the
          <FaqLink href="https://app.deriv.com/cashier/">Cashier page.</FaqLink>
        </FaqText>
      ),
      () => (
        <FaqText>
          We process your deposits and withdrawals internally within 24 hours
          (depending on your payment method and internal checks). It may take
          longer for your funds to reach you due to the different processing
          times by banks and payment service providers. See our
          <FaqLink href="https://deriv.com/payment-methods/">
            Payment methods
          </FaqLink>
          page for a complete list of the processing times for each payment
          method.
        </FaqText>
      ),
      () => (
        <FaqText>
          The minimum deposit amount to open a Deriv real account is 10,000 HKD.
          After opening your account, there are no minimum limits for deposits
          and withdrawals.
        </FaqText>
      ),
      () => (
        <FaqBox>
          <FaqText>
            Be sure to check the spam or junk section of your email as well if
            you do not receive the link in your inbox.
          </FaqText>
          <FaqText>
            You can request a new link on the
            <FaqLink href="https://app.deriv.com/cashier/withdrawal">
              Cashier
            </FaqLink>
            page. Go to
            <FaqLink href="https://app.deriv.com/cashier/withdrawal">
              Withdrawal
            </FaqLink>
            and click <strong>Verify my request.</strong> We'll email you a new
            link; please remember to use it within 1 hour.
          </FaqText>
        </FaqBox>
      ),
      () => (
        <FaqText>
          The currency conversion for your deposits and withdrawals are done by
          your payment service provider. For example, if you use Payment Asia,
          your transaction amount will be converted by Skrill. Please check with
          your service provider regarding the conversion rates used for your
          deposits and withdrawals.
        </FaqText>
      ),
      () => (
        <FaqBox>
          <FaqText>To cancel your withdrawal, follow these steps:</FaqText>
          <FaqText>
            Go to
            <FaqLink href="https://app.deriv.com/cashier/withdrawal">
              Cashier &gt; Withdrawal.
            </FaqLink>
          </FaqText>
          <FaqText>
            We'll send you an email with a verification link. Click that link.
          </FaqText>
          <FaqText>
            You’ll be brought back to the{' '}
            <FaqLink href="https://app.deriv.com/cashier/withdrawal">
              Cashier
            </FaqLink>
            page. Click
            <strong> Review pending </strong>and select the transaction that
            you'd like to cancel.
          </FaqText>
          <FaqText>
            Click <strong>Yes</strong> to confirm the cancellation. Your funds
            will be returned to your Deriv account, and your account balance
            will be updated accordingly.
          </FaqText>
          <FaqText>
            <strong>Note:</strong> You can cancel your withdrawal as long as we
            haven’t started processing it. Once it’s in process, cancellation
            isn’t possible.
          </FaqText>
        </FaqBox>
      ),
      () => (
        <FaqText>
          No. To keep your funds safe, you are strictly prohibited from using
          payment methods that are not yours. If you do use someone else’s
          payment method, we’ll suspend your Deriv account for security
          purposes.
        </FaqText>
      ),
      () => (
        <FaqText>
          Your payment method will only appear on the Withdrawal page after
          you've made your first deposit. If you've made a deposit and still
          don't see your payment method on the Withdrawal screen, it's probably
          because the payment method you used for the deposit cannot be used for
          withdrawals. In this case, you may need to use a different payment
          method that supports withdrawals, too.
          <FaqLink href="https://deriv.com/contact_us/?is_livechat_open=true">
            Contact us via live chat
          </FaqLink>{' '}
          if you need help.
        </FaqText>
      ),
      () => (
        <FaqText>
          No. Fund transfer can only be made within your own accounts.
        </FaqText>
      ),
    ],
  },
  {
    header: 'Security',
    questions: [
      'Do I need to verify my Deriv account?',
      'How long does verification take?',
      'Why were my documents declined?',
      'I lost my phone. How can I disable two-factor authentication (2FA)?',
      'How can I identify Deriv customer support impersonators on instant messaging apps (such as WhatsApp)?',
      'How can I stay safe from impersonators on instant messaging apps (such as WhatsApp)?',
      'How can I identify emails from impersonators of Deriv customer support?',
    ],
    answers: [
      () => <FaqText>Yes.</FaqText>,
      () => (
        <FaqText>
          We’ll typically take 1-3 business days to review your documents and
          will inform you of the result via email once it’s done.
        </FaqText>
      ),
      () => (
        <FaqText>
          We may decline your verification documents if they are insufficiently
          clear, invalid, expired, or have cropped edges.
        </FaqText>
      ),
      () => (
        <FaqText>
          Please
          <FaqLink href="https://deriv.com/contact_us/?is_livechat_open=true">
            contact us via live chat
          </FaqLink>
          immediately, and we'll help to disable 2FA on your account. When you
          have a new phone, please
          <FaqLink href="https://app.deriv.com/account/two-factor-authentication">
            re-enable 2FA.
          </FaqLink>
        </FaqText>
      ),
      () => (
        <FaqBox>
          <FaqText>
            An impersonator’s main goal is to steal your sensitive information
            and funds.
          </FaqText>
          <FaqText>
            Here are some ways to identify impersonators of Deriv customer
            support:
          </FaqText>
          <FaqList
            data={[
              <FaqText>
                Impersonators ask for your login details or other sensitive
                information via instant messaging apps.
              </FaqText>,
              <FaqText>
                They provide rewards that sound too good to be true.
              </FaqText>,
              <FaqText>
                They demand payments via untraceable channels, for example, via
                cryptocurrency.
              </FaqText>,
              <FaqText>
                They ask you to download an app that isn’t offered on Google
                Play Store or Apple App Store.
              </FaqText>,
              <FaqText>
                They ask you to download software that enables your device to be
                controlled remotely.
              </FaqText>,
              <FaqText>
                They ask you to download files containing malware or virus that
                can infect your device.
              </FaqText>,
            ]}
          />
          <FaqText>
            Of course, this list isn’t complete. Every day, impersonators come
            up with new ways to try to steal your information and money.
          </FaqText>
        </FaqBox>
      ),
      () => (
        <FaqBox>
          <FaqText>
            Do not share your account information and other personal details
            with anyone via instant messaging apps.
          </FaqText>
          <FaqList
            data={[
              <FaqText>
                If something sounds too good to be true, don’t trust it.
              </FaqText>,
              <FaqText>
                Never download apps via instant messaging apps.
              </FaqText>,
              <FaqText>
                Run all files through an up-to-date antivirus first before
                downloading.
              </FaqText>,
              <FaqText>
                Please ensure to
                <FaqLink href="https://t.me/derivdotcomofficial">
                  join the correct Deriv group
                </FaqLink>{' '}
                on Telegram.
              </FaqText>,
              <FaqText>
                If you have been contacted by a potential impersonator or if you
                have any questions, contact us{' '}
                <FaqLink href="https://deriv.com/contact_us/?is_livechat_open=true">
                  via live chat.
                </FaqLink>
              </FaqText>,
            ]}
          />
        </FaqBox>
      ),
      () => (
        <FaqBox>
          <FaqText>
            Here are some ways to identify emails from impersonators:
          </FaqText>
          <FaqList
            data={[
              <FaqText>
                The email is poorly written, with incorrect grammar and many
                typos.
              </FaqText>,
              <FaqText>
                Impersonators ask you to send confidential information over an
                unsecure platform, for example via SMS, WhatsApp, email, etc.
              </FaqText>,
              <FaqText>
                They ask you to fill up a form on an unsecure website without an
                HTTPS (secured) connection.
              </FaqText>,
              <FaqText>
                They ask you to download unsecure mobile apps in the form of APK
                files that aren’t offered on Google Play Store or Apple App
                Store.
              </FaqText>,
              <FaqText>
                They ask you to download file attachments or remote access
                software (such as Teamviewer) to give them remote control of
                your device. For example, an impersonator may take control and
                install ransomware on your device and then demand a ransom. If
                the ransom isn’t paid, you may lose access to your device
                permanently.
              </FaqText>,
              <FaqText>
                Impersonators typically use free email domains such as
                @yahoo.com, @gmail.com, or @protonmail.com. Always read the
                sender's full email address to know who sent the email. Note:
                Emails from Deriv will always come from @deriv.com.
              </FaqText>,
            ]}
          />
        </FaqBox>
      ),
    ],
  },
  {
    header: 'Complaints procedure',
    questions: [
      'What is a complaint?',
      'How can I submit a complaint?',
      'What information should I include when making a complaint?',
      'What happens after I submit a complaint through live chat?',
      `What should I do if I'm not happy with the response from your customer support team?`,
      'Can I go to the regulator directly instead of contacting you first?',
      'What if I am unhappy with the outcome of my complaint?',
    ],
    answers: [
      () => (
        <FaqText>
          A complaint is defined as a spoken or written expression of your
          dissatisfaction with the products or services that the Company offers.
          If you believe these have led to, or may lead to, monetary loss,
          considerable distress, or significant inconvenience, then your voiced
          dissatisfaction is considered a complaint.
        </FaqText>
      ),
      () => (
        <FaqBox>
          <FaqText>
            To register a complaint and seek assistance, follow these easy steps
          </FaqText>
          <FaqList
            variant="decimal"
            data={[
              <FaqText>
                Locate the live chat widget on our website or app at the bottom
                right corner of the screen.
              </FaqText>,
              <FaqText>Click the widget to open the chat window. </FaqText>,
              <FaqText>
                Once you’re shown options to select from, choose “Complaints”.
                You can also type "complaint".
              </FaqText>,
              <FaqText>
                Respond to the questions that appear on your screen.
              </FaqText>,
            ]}
          />
        </FaqBox>
      ),
      () => (
        <FaqText>
          When making a complaint, make sure to include your full name, account
          number, a clear description of the problem, important dates, and any
          proof or documents that support your complaint. The more specific and
          detailed your complaint, the better our team can help you.
        </FaqText>
      ),
      () => (
        <FaqText>
          After you send your complaint through live chat, our team will review
          the information you provided. You'll get a response to your complaint
          or updates on its status via email.
        </FaqText>
      ),
      () => (
        <FaqText>
          If you're not satisfied with the answer you get from our customer
          support team, you can make a formal complaint by contacting our
          compliance team at complaints@deriv.com. They will review your
          complaint independently to see if we treated you fairly within our
          rights and our contractual obligations to you. For more details, log
          in to your account and check our{' '}
          <FaqLink href="https://app.deriv.com/complaints-policy?lang=EN">
            complaints policy.
          </FaqLink>
          It explains the steps you can take for further help.
        </FaqText>
      ),
      () => (
        <FaqText>
          No. Regulators will not accept your complaint unless you first give us
          a chance to investigate your complaint and give you a response within
          the timeframes specified in our
          <FaqLink href="https://app.deriv.com/complaints-policy?lang=EN">
            complaints policy.
          </FaqLink>
        </FaqText>
      ),
      () => (
        <FaqText>
          If you are not satisfied with the outcome, you can escalate your
          complaint, provided that the
          <FaqLink href="https://app.deriv.com/complaints-policy?lang=EN">
            complaints policy.
          </FaqLink>
          associated with your account states that escalation is possible.
        </FaqText>
      ),
    ],
  },
  {
    header: 'Deriv MT5',
    questions: [
      'What is Deriv MetaTrader 5 (Deriv MT5)?',
      'How long does it take for my deposits and withdrawals to be processed?',
      'Why are my Deriv MT5 login details different from my Deriv login details?',
      'How can I change my Deriv MT5 password?',
      'How can I deposit funds into my Deriv MT5 real money account?',
      'How do I log in to my Deriv MT5 account?',
      'How do I set an investor password for my Deriv MT5 account?',
      'What is the name of my Deriv MT5 server?',
      'What is the minimum amount to open a position on Deriv MT5?',
      'Why do my Deriv MT5 positions always start with a loss?',
      'Do you offer swap-free Deriv MT5 accounts?',
      'How can I reactivate my Deriv MT5 account?',
      'Can I change the leverage on my Deriv MT5 account?',
      'What time is shown in the MT5 terminal?',
      'How can I download my Deriv MT5 history?',
      'Can I delete my Deriv MT5 account history?',
      'For how long can I use my Deriv MT5 demo account?',
      'Will my inactive Deriv MT5 account be deactivated even though I still have a balance?',
      'Can I change the currency of my Deriv MT5 account?',
      'Can I change the server for my Deriv MT5 account?',
      'Do you offer micro forex pairs on Deriv MT5?',
      'What is the minimum volume for micro forex pairs?',
    ],
    answers: [
      () => (
        <FaqText>
          Deriv MT5 is a leveraged trading platform that gives you access to the
          world’s forex markets. Learn more about Deriv MT5
          <FaqLink href="https://deriv.com/dmt5/">here.</FaqLink>
        </FaqText>
      ),
      () => (
        <FaqText>
          You'll need to transfer the funds from your Deriv MT5 account to your
          Deriv account. You can do this on the
          <FaqLink href="https://app.deriv.com/cashier/account-transfer">
            Cashier page.
          </FaqLink>
          Your funds will be available in your Deriv account as soon as you
          complete the transfer.
        </FaqText>
      ),
      () => (
        <FaqText>
          This difference is because MT5 is a third-party platform that requires
          its own login credentials. Your Deriv MT5 login gives you access to
          the MT5 platform, while your Deriv login gives you access to our
          digital options platforms such as DTrader and DBot.
        </FaqText>
      ),
      () => (
        <FaqBox>
          <FaqText>
            Follow these steps to reset your Deriv MT5 password:
          </FaqText>
          <FaqList
            variant="decimal"
            data={[
              <FaqText>
                <FaqLink href="https://oauth.deriv.com/oauth2/authorize?app_id=16929">
                  Log in
                </FaqLink>
                to Deriv.
              </FaqText>,
              <FaqBox>
                <FaqText>
                  On the <strong>Trader’s Hub</strong>, hit{' '}
                  <strong>Open</strong> next to your Deriv MT5 account.
                </FaqText>
                <FaqImage
                  imageName="help-centre/faq/deriv-mt5-open.png"
                  alt="MT5 Open"
                  width={568}
                  height={236}
                />
              </FaqBox>,
              <FaqBox>
                <FaqText>Hit the pencil icon next the password.</FaqText>
                <FaqImage
                  imageName="help-centre/faq/hit-the-pencil.png"
                  alt="MT5 Pencil"
                  width={568}
                  height={294}
                />
              </FaqBox>,
              <FaqBox>
                <FaqText>
                  In the next screen, hit Change password under Deriv MT5
                  password.
                </FaqText>
                <FaqImage
                  imageName="help-centre/faq/deriv-mt5-password.png"
                  alt="MT5 Password"
                  width={568}
                  height={366}
                />
              </FaqBox>,
              <FaqBox>
                <FaqText>Hit the pencil icon next the password.</FaqText>
                <FaqImage
                  imageName="help-centre/faq/hit-the-pencil.png"
                  alt="MT5 Pencil"
                  width={568}
                  height={294}
                />
              </FaqBox>,
              <FaqBox>
                <FaqText>
                  Hit Confirm and follow the on-screen instructions to change
                  your Deriv MT5 password.
                </FaqText>
                <FaqImage
                  imageName="help-centre/faq/hit-confirm.png"
                  alt="Hit Confirm"
                  width={568}
                  height={385}
                />
              </FaqBox>,
            ]}
          />
        </FaqBox>
      ),
      () => (
        <FaqText>
          You'll need to transfer funds from your Deriv account to your Deriv
          MT5 account. You can do this on the{' '}
          <FaqLink href="https://app.deriv.com/cashier/account-transfer">
            Cashier page.
          </FaqLink>{' '}
          Transfers are instant; your funds will be available in your Deriv MT5
          account as soon as you complete the transfer.
        </FaqText>
      ),
      () => (
        <FaqText>
          You can log in to your Deriv MT5 account via the MT5 desktop app, web
          terminal, or mobile app. You'll need the login ID and server name from
          the{' '}
          <FaqLink href="https://app.deriv.com/appstore/traders-hub">
            Trader’s Hub.
          </FaqLink>{' '}
          Please remember to use your Deriv MT5 password to log in to your Deriv
          MT5 account.
        </FaqText>
      ),
      () => (
        <FaqBox>
          <FaqText>Follow these steps to set an investor password:</FaqText>
          <FaqList
            variant="decimal"
            data={[
              <FaqText>
                <FaqLink href="https://oauth.deriv.com/oauth2/authorize?app_id=16929">
                  Log in
                </FaqLink>
                to Deriv.
              </FaqText>,
              <FaqBox>
                <FaqText>
                  On the <strong>Trader’s Hub</strong>, hit{' '}
                  <strong>Open</strong> next to your Deriv MT5 account.
                </FaqText>
                <FaqImage
                  imageName="help-centre/faq/deriv-mt5-open.png"
                  alt="MT5 Open"
                  width={568}
                  height={236}
                />
              </FaqBox>,
              <FaqBox>
                <FaqText>Hit the pencil icon next to the password.</FaqText>
                <FaqImage
                  imageName="help-centre/faq/hit-the-pencil.png"
                  alt="MT5 Pencil"
                  width={568}
                  height={294}
                />
              </FaqBox>,
              <FaqBox>
                <FaqText>
                  On the next screen, select <strong>Investor password.</strong>
                </FaqText>
                <FaqImage
                  imageName="help-centre/faq/investor-password.png"
                  alt="Investor Password"
                  width={568}
                  height={218}
                />
              </FaqBox>,
              <FaqText>
                Follow the on-screen instructions to set your investor password.
              </FaqText>,
            ]}
          />
        </FaqBox>
      ),
      () => (
        <FaqBox>
          <FaqText>
            You can find your Deriv MT5 server name on the{' '}
            <FaqLink href="https://app.deriv.com/appstore/traders-hub">
              Trader’s Hub.
            </FaqLink>
            Hit <strong>Open</strong> next to your Deriv MT5 account and find
            the server below the broker name.
          </FaqText>
          <FaqImage
            imageName="help-centre/faq/deriv-mt5-server.png"
            alt="MT5 Server"
            width={568}
            height={138}
          />
        </FaqBox>
      ),
      () => (
        <FaqText>
          The minimum amount you’ll need to open a position on Deriv MT5 depends
          on the margin required for each asset. You can calculate the margin
          required using our{' '}
          <FaqLink href="https://deriv.com/trader-tools/margin-calculator">
            margin calculator.
          </FaqLink>
        </FaqText>
      ),
      () => (
        <FaqText>
          This is due to the spread, which is the difference between the ‘bid’
          and ‘ask’ prices. Your positions will start earning a profit when the
          market moves in your favour.
        </FaqText>
      ),
      () => (
        <FaqText>
          Yes, we do. You can create a swap-free Deriv MT5 account on the
          Trader’s hub.
        </FaqText>
      ),
      () => (
        <FaqText>
          You can't reactivate your Deriv MT5 account. Instead, you can create a
          new one on the Trader’s Hub.
        </FaqText>
      ),
      () => <FaqText>No, you can't. </FaqText>,
      () => <FaqText>Greenwich Mean Time (GMT).</FaqText>,
      () => (
        <FaqBox>
          <FaqText>Follow these steps to download a 3-month statement:</FaqText>
          <FaqList
            variant="decimal"
            data={[
              <FaqText>
                Log in to your MT5 account via the desktop app.
              </FaqText>,
              <FaqText>
                Go to the <strong>History</strong> section.
              </FaqText>,
              <FaqText>
                Right-click on <strong>Time</strong>, click{' '}
                <strong>Report</strong>, and select <strong>Open XML</strong>.
              </FaqText>,
              <FaqText>
                Your Deriv MT5 history will be downloaded as an XML file.
              </FaqText>,
            ]}
          />
          <FaqText>
            If you need a statement for a more extended period, contact us via
            <FaqLink href="https://deriv.com/contact_us/?is_livechat_open=true">
              live chat
            </FaqLink>
            , and we'll help you with it.
          </FaqText>
        </FaqBox>
      ),
      () => <FaqText>No, you can't.</FaqText>,
      () => (
        <FaqText>
          You can use your Deriv MT5 demo account for as long as you want.
          However, if your account is inactive for 30 days, we'll deactivate it
          automatically. You can still create a new one on the{' '}
          <FaqLink href="https://app.deriv.com/appstore/traders-hub">
            Trader’s hub.
          </FaqLink>
        </FaqText>
      ),
      () => (
        <FaqText>
          Yes, we’ll transfer your balance to your Deriv account before your
          Deriv MT5 account is deactivated.
        </FaqText>
      ),
      () => <FaqText>No, you can’t.</FaqText>,
      () => <FaqText>No, you can’t.</FaqText>,
      () => (
        <FaqText>Yes, micro forex pairs are available on Deriv MT5.</FaqText>
      ),
      () => (
        <FaqText>The minimum volume for micro forex pairs is 0.1 lot.</FaqText>
      ),
    ],
  },
  {
    header: 'About Deriv',
    questions: ['Is Deriv regulated?', 'Where is my money held?'],
    answers: [
      () => (
        <FaqBox>
          <FaqText>
            Yes, we’re regulated by the Securities and Futures Commission.
          </FaqText>
          <FaqText>
            You can get more info about this on our
            <FaqLink href="https://deriv.com/regulatory/">
              Regulatory information
            </FaqLink>
            page.
          </FaqText>
        </FaqBox>
      ),
      () => (
        <FaqText>
          Your money is held in secure financial institutions and is always
          available to you, should you wish to withdraw. We don't use your money
          for our business purposes.
        </FaqText>
      ),
    ],
  },
];

export const CardsFAQ = [...FAQData].map(({ header, questions }, faqKey) => {
  const trimmedQuestions = [...questions];

  trimmedQuestions.length = faqCardsMaxItems[faqKey];

  return {
    header,
    children: generateFaqs(trimmedQuestions, header),
    ...cardSetting,
  };
}) as CardContent[];
