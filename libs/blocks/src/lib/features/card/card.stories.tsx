import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@deriv/quill-design';
import Card from '.'

const meta = {
  title: 'Blocks/Features/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

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