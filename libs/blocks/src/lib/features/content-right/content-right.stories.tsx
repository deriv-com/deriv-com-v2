import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@deriv/quill-design';
import ContentRight from '.'

const meta = {
  title: 'Blocks/Features/Content-Right',
  component: ContentRight,
  tags: ['autodocs'],
} satisfies Meta<typeof ContentRight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'my-1000 bg-background-primary-container max-sm:px-800 max-lg:px-1200',
    title:'Title here',
    description: <Text>Description goes here description goes here description goes here description goes here</Text>,
    left_content: <div 
        className="flex w-full"
    >
        <Text>Any Content here</Text>
    </div>,
    right_content: <img 
        className="flex flex-1 w-full"
        src="https://placehold.co/712x800"
        alt="Placeholder"
    />
  },
}