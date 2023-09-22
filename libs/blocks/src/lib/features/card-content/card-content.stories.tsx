import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@deriv/quill-design';
import CardContent from '.'

const meta = {
  title: 'Blocks/Features/CardContent',
  component: CardContent,
  tags: ['autodocs'],
} satisfies Meta<typeof CardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Title goes here",
    description: "Description goes here description goes here description goes here description goes here",
    cta: <div className="flex justify-center w-full">
      <Button>CTA</Button>
    </div>
  },
}