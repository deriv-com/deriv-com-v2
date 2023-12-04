import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@deriv/quill-design';
import ContentText from '.';

const meta = {
  title: 'Blocks/ContentText',
  component: ContentText,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '`() => ReactNode`',
      control: 'function',
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof ContentText>;

const Content = () => {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta augue
        at dui ullamcorper, sed suscipit libero dapibus. Aenean interdum libero
        ac justo bibendum, a eleifend nulla hendrerit. Cras vel lacus sit amet
        sem tincidunt fringilla. Suspendisse vel ex ut lectus mattis venenatis.
        Fusce viverra ligula nec ex scelerisque, a efficitur urna tincidunt.
        Vivamus ac justo nec velit finibus fermentum.
      </Text>
      <Text>
        Praesent euismod, nisi ac bibendum facilisis, est purus tincidunt arcu,
        eget auctor nisi purus eu odio. Nunc nec lacinia justo. Proin auctor,
        purus sed varius eleifend, dolor metus aliquet sapien, eget tempus justo
        tortor a dui. Maecenas euismod, purus vel venenatis tempus, justo quam
        tristique purus, ac consequat erat nisi eu purus. Fusce vitae lorem id
        lectus auctor malesuada. Nulla facilisi. Vivamus congue tristique
        tellus, sit amet vehicula purus bibendum quis.
      </Text>
      <Text>
        Phasellus cursus dignissim lectus, in vestibulum justo tempor in. Nulla
        facilisi. Sed sit amet dui in justo luctus dictum. Vestibulum malesuada,
        justo id gravida volutpat, arcu purus scelerisque odio, id lacinia odio
        arcu in ligula. Integer ut ipsum ut odio cursus sodales. Suspendisse nec
        fermentum ex. Cras sed lectus quis metus fermentum interdum.
      </Text>
    </>
  );
};

export default meta;
type Story = StoryObj<typeof ContentText>;

export const Default: Story = {
  args: {
    className:
      'my-1000 bg-background-primary-container max-sm:px-800 max-lg:px-1200',
    title: 'Title here',
    children: <Content />,
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    title: '',
  },
};
