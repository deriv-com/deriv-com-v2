import type { Meta, StoryObj } from '@storybook/react';
import MainNavigation from '.';
import { LangItems, LanguageProvider } from '@deriv-com/providers';

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
      <LanguageProvider langItems={langItemsHK} activeLanguage={langItemsHK.en}>
        <MainNavigation />
      </LanguageProvider>
    );
  },
};

export const Default = {
  ...Template,
  args: {},
};

const langItemsHK: LangItems = {
  en: {
    isDefault: true,
    path: 'en',
    displayName: 'English',
    shortName: 'EN',
    affiliateLang: 0,
  },
  zhcn: {
    path: 'zh-cn',
    displayName: '简体中文',
    shortName: '简体',
    affiliateLang: 10,
  },
  zhtw: {
    path: 'zh-tw',
    displayName: '繁體中文',
    shortName: '繁體',
    affiliateLang: 11,
  },
};
