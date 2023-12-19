import type { Meta, StoryObj } from '@storybook/react';
import { SocialProof } from '..';
import { OptimizedImage } from '@deriv-com/components';
import { data } from '../stories-data';

const meta = {
  title: 'Blocks/SocialProof/Horizontal',
  component: SocialProof.Horizontal,
  tags: ['autodocs'],
  argTypes: {
    content: {
      description:
        '`({ ...props }: TPilotDataProps) => string[] | ReactNode[]`',
    },
    data: {
      table: { type: { summary: 'TPilotDataProps' } },
      options: Object.keys(data),
      mapping: data,
      control: { type: 'select' },
    },
    logo: { description: '`ReactNode`' },
  },
} satisfies Meta<typeof SocialProof.Horizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Our customers say',
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    data: {
      trustScore: 4.5,
      numberOfReviews: '45454',
      stars: 4.4,
    },
    logo: (
      <OptimizedImage
        imageName="home/trustpilot/trustpilot-logo.png"
        alt="trustpilot"
        width={97}
        height={24}
      />
    ),
  },
};

export const CustomTheme: Story = {
  args: {
    ...Default.args,
    theme: {
      color: '!text-[#ffffff]',
      background: 'bg-solid-slate-700',
    },
  },
};

export const BadScore: Story = {
  args: {
    ...Default.args,
    data: data.BadScore,
  },
};

export const PoorScore: Story = {
  args: {
    ...Default.args,
    data: data.PoorScore,
  },
};

export const AverageScore: Story = {
  args: {
    ...Default.args,
    data: data.AverageScore,
  },
};

export const GreatScore: Story = {
  args: {
    ...Default.args,
    data: data.GreatScore,
  },
};

export const ExcellentScore: Story = {
  args: {
    ...Default.args,
    data: data.ExcellentScore,
  },
};
