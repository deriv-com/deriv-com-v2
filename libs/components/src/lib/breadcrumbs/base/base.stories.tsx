import type { Meta, StoryObj } from '@storybook/react';
import { Base } from '.';

const meta = {
  title: 'Components/Breadcrumbs/Default',
  tags: ['auto-docs'],
  component: Base,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Base>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'py-general-md',
    links: [
      {
        href: '',
        content: 'Home',
      },
      {
        href: '',
        content: 'Trade',
      },
    ],
  },
};

export const Max: Story = {
  args: {
    className: 'py-general-md',
    links: [
      {
        href: '',
        content: 'Home',
      },
      {
        href: '/help-centre',
        content: 'Help Centre',
      },
      {
        href: '/help-centre/account',
        content: 'Account',
      },
      {
        href: '/help-centre/account/questions',
        content: 'Questions',
      },
      {
        href: '',
        content: 'How to trade in Deriv',
      },
    ],
  },
};
