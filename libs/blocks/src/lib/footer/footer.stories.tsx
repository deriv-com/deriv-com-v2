import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FooterBlock from '.';
import {
  StandaloneAppleIcon,
  StandaloneFacebookIcon,
  StandaloneInstagramIcon,
} from '@deriv/quill-icons';

const meta = {
  title: 'Blocks/Footer',
  component: FooterBlock,
} satisfies Meta<typeof FooterBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    className: '',
    socialButtons: social,
    navigationContent: () => (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/712x100"
        alt="Placeholder"
      />
    ),
    descriptionContent: () => <p>Description content here</p>,
    warningText:
      'Risk warning description goes here. A risk warning description is a crucial component of various financial, investment, or business documents, including prospectuses, investment brochures, loan agreements, and other legal or financial disclosures.',
  },
};
