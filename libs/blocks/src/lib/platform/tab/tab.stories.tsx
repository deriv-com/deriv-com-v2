import type { Meta, StoryObj } from '@storybook/react';
import PlatformBlockTab from '.';
import { tabsItem } from './mock-data';

const { tabs, children, title, description, className } = tabsItem;

const meta = {
  title: 'Blocks/Platform/Tab',
  component: PlatformBlockTab,
  tags: ['autodocs'],
  argTypes: {
    header: { description: '`ReactNode`' },
    description: { description: '`ReactNode`' },
    className: { table: { disable: true } },
    children: { description: '`ReactNode`' },
  },
} satisfies Meta<typeof PlatformBlockTab>;

export default meta;
type Story = StoryObj<typeof PlatformBlockTab>;

export const Default: Story = {
  args: {
    header: title,
    description: description,
    className: className,
    tabs: tabs,
    children: children,
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    header: '',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};
