import type { Meta, StoryObj } from '@storybook/react';
import Tab from '..';

const meta = {
  title: 'Components/Tab/Base',
  component: Tab.Base,
} satisfies Meta<typeof Tab.Base>;

export default meta;
type Story = StoryObj<typeof Tab.Base>;

export const Default: Story = {
  render: () => {
    return (
      <Tab.Base
        tabId="base-tab"
        tabs={[
          { content: 'Home' },
          { content: 'Profile' },
          { content: 'Contact' },
        ]}
      >
        <div>Home Tab</div>
        <div>Profile Tab</div>
        <div>Contact Tab</div>
      </Tab.Base>
    );
  },
  parameters: {
    docs: {
      source: {
        code: 'disabled',
      },
    },
  },
};
