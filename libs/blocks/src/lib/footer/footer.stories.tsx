import type { Meta } from '@storybook/react';
import {
  StandaloneAppleIcon,
  StandaloneFacebookIcon,
  StandaloneInstagramIcon,
} from '@deriv/quill-icons/Standalone';
import Footer from '.';

const meta = {
  title: 'Blocks/Footer/FooterBlock',
  component: Footer.FooterBlock,
} satisfies Meta<typeof Footer.FooterBlock>;

export default meta;

const social = [
  {
    icon: <StandaloneFacebookIcon iconSize="md" />,
    href: '/',
  },
  {
    icon: <StandaloneAppleIcon iconSize="md" />,
    href: '/',
  },
  {
    icon: <StandaloneInstagramIcon iconSize="md" />,
    href: '/',
  },
];

const Template = {
  render: ({ ...args }) => {
    return (
      <Footer.FooterBlock
        descriptionContent={args.descriptionContent}
        socialButtons={args.socialButtons}
        warningText={args.warningText}
        className={args.className}
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
    className: '',
  },
};
