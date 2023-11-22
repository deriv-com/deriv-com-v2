import type { Meta, StoryObj } from '@storybook/react';
import { SocialProof } from '..';

const meta = {
  title: 'Blocks/SocialProof/Horizontal',
  component: SocialProof.Horizontal,
} satisfies Meta<typeof SocialProof.Horizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 4.5,
      numberOfReviews: '45454',
      stars: 4.4,
    },
  },
};

export const CustomTheme: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 4.5,
      numberOfReviews: '45454',
      stars: 4.4,
    },
    theme: {
      color: '!text-[#ffffff]',
      background: 'bg-solid-slate-700',
      logo: 'dark',
    },
  },
};

export const BadScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 0.6,
      numberOfReviews: '45454',
      stars: 0.6,
    },
  },
};

export const PoorScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 1.6,
      numberOfReviews: '45454',
      stars: 1.6,
    },
  },
};

export const AverageScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 2.5,
      numberOfReviews: '45454',
      stars: 2.5,
    },
  },
};

export const GreatScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 3.8,
      numberOfReviews: '99990',
      stars: 3.8,
    },
  },
};

export const ExcellentScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      'Excellent',
      `TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 4.8,
      numberOfReviews: '45454',
      stars: 4.8,
    },
  },
};
