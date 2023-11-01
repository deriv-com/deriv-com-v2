import type { Meta } from '@storybook/react';
import {
  StandaloneAppleIcon,
  StandaloneFacebookIcon,
  StandaloneInstagramIcon,
} from '@deriv/quill-icons';
import Footer from '.';

const meta = {
  title: 'Blocks/Footer',
  component: Footer.FooterBlock,
} satisfies Meta<typeof Footer.FooterBlock>;

export default meta;

const social = [
  {
    icon: <StandaloneFacebookIcon iconSize="md" />,
    href: 'https://www.facebook.com/derivdotcom/',
  },
  {
    icon: <StandaloneAppleIcon iconSize="md" />,
    href: 'https://www.facebook.com/derivdotcom/',
  },
  {
    icon: <StandaloneInstagramIcon iconSize="md" />,
    href: 'https://www.facebook.com/derivdotcom/',
  },
];

const Template = {
  render: ({ ...args }) => {
    return (
      <Footer.FooterBlock
        descriptionContent={args.descriptionContent}
        socialButtons={args.socialButtons}
        warningText={args.warningText}
      >
        <img
          className="flex w-full flex-1"
          src="https://placehold.co/712x100"
          alt="Placeholder"
        />
      </Footer.FooterBlock>
    );
  },
};

export const Default = {
  ...Template,
  args: {
    socialButtons: social,
    descriptionContent: () => <p>Description content here</p>,
    warningText:
      'Risk warning description goes here. A risk warning description is a crucial component of various financial, investment, or business documents, including prospectuses, investment brochures, loan agreements, and other legal or financial disclosures.',
  },
};
