import type { Meta, StoryObj } from '@storybook/react';
import MainNavigation from '.';
import { LanguageProvider, langItemsHK } from '@deriv-com/providers';

const meta = {
  title: 'Features/Navigation/Main HK',
  component: MainNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main navigation',
      },
    },
  },
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <LanguageProvider langItems={langItemsHK}>
        <MainNavigation />
      </LanguageProvider>
    );
  },
};

export const Default = {
  ...Template,
  args: {},
};
