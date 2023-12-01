import type { Meta, StoryObj } from '@storybook/react';
import MainRowNavigation from './man-navigation.row';
import { LanguageProvider, langItemsROW } from '@deriv-com/providers';

const meta = {
  title: 'Features/Navigation/Main Row',
  component: MainRowNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main navigation',
      },
    },
  },
} satisfies Meta<typeof MainRowNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <LanguageProvider langItems={langItemsROW}>
        <MainRowNavigation />
      </LanguageProvider>
    );
  },
};

export const Default = {
  ...Template,
  args: {},
};
