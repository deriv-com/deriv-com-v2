import type { Meta, StoryObj } from '@storybook/react';
import {
  StandaloneAppleIcon,
  StandaloneFacebookIcon,
  StandaloneInstagramIcon,
} from '@deriv/quill-icons/Standalone';
import Footer from '.';

const meta = {
  title: 'Blocks/Footer/FooterBlock',
  component: Footer.FooterBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer.FooterBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    socialButtons: social,
    descriptionContent: () => <p>Description content here</p>,
    warningText:
      'Risk warning description goes here. A risk warning description is a crucial component of various financial, investment, or business documents, including prospectuses, investment brochures, loan agreements, and other legal or financial disclosures.',
    className: '',
  },
};
