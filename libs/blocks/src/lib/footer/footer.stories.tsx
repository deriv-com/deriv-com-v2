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
  argTypes: {
    socialButtons: {
      table: { type: { summary: '[{icon: QuillIcons; href: string;}]' } },
    },
    className: {
      table: { disable: true },
    },
    children: {
      table: { type: { summary: '() => ReactNode' } },
      control: 'function',
    },
  },
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
    children: (
      <img
        className="flex w-full flex-1"
        src="https://placehold.co/712x100"
        alt="Placeholder"
      />
    ),
  },
};

export const WithoutDescriptionContent: Story = {
  args: {
    ...Default.args,
    // eslint-disable-next-line react/jsx-no-useless-fragment
    descriptionContent: () => <></>,
  },
};

export const WithoutWarningText: Story = {
  args: {
    ...Default.args,
    warningText: '',
  },
};

export const WithoutSocialButtons: Story = {
  args: {
    ...Default.args,
    socialButtons: [],
  },
};
