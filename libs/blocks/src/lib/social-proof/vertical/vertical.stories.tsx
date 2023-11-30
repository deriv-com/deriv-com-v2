import type { Meta, StoryObj } from '@storybook/react';
import { SocialProof } from '..';
import { OptimizedImage } from '@deriv-com/components';

const meta = {
  title: 'Blocks/SocialProof/Vertical',
  component: SocialProof.Vertical,
} satisfies Meta<typeof SocialProof.Vertical>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      `TrustScore ${trustScore}`,
      `${numberOfReviews} reviews`,
    ],
    staticData: {
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
    content: ({ numberOfReviews, trustScore }) => [
      `TrustScore ${trustScore}`,
      `${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 4.5,
      numberOfReviews: '45454',
      stars: 4.4,
    },
    theme: {
      color: '!text-[#ffffff]',
      background: 'bg-solid-slate-700',
      divider: 'dark',
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

export const BadScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      `TrustScore ${trustScore}`,
      `${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 0.6,
      numberOfReviews: '45454',
      stars: 0.6,
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

export const PoorScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      `TrustScore ${trustScore}`,
      `${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 1.6,
      numberOfReviews: '45454',
      stars: 1.6,
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

export const AverageScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      `TrustScore ${trustScore}`,
      `${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 2.5,
      numberOfReviews: '45454',
      stars: 2.5,
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

export const GreatScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      `TrustScore ${trustScore}`,
      `${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 3.8,
      numberOfReviews: '99990',
      stars: 3.8,
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

export const ExcellentScore: Story = {
  args: {
    content: ({ numberOfReviews, trustScore }) => [
      `TrustScore ${trustScore}`,
      `${numberOfReviews} reviews`,
    ],
    staticData: {
      trustScore: 4.8,
      numberOfReviews: '45454',
      stars: 4.8,
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
