import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';
import {
  PartnersProductDerivCtraderBrandLightLogoHorizontalIcon,
  PartnersProductDerivMt5BrandLightLogoHorizontalIcon,
} from '@deriv/quill-icons/Logo';

const meta = {
  title: 'Blocks/Platform/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description:
      'Description goes here description goes here description goes here description goes here',
    header: '20+ years of proven excellence',
    cols: 'three',
    cards: [
      {
        id: 1,
        header: 'Deriv MT5',
        description: 'The most popular and comprehensive CFDs platform.',
        icon: (
          <PartnersProductDerivMt5BrandLightLogoHorizontalIcon
            width={48}
            height={48}
          />
        ),
        size: 'md',
        align: 'start',
        color: 'gray',
        link: {
          content: 'Learn more',
          href: '/',
        },
      },
      {
        id: 2,
        header: 'Deriv cTrader',
        description: 'The most popular and comprehensive CFDs platform.',

        icon: (
          <PartnersProductDerivCtraderBrandLightLogoHorizontalIcon
            height="48"
            width="48"
          />
        ),
        size: 'md',
        align: 'start',
        color: 'gray',
        link: {
          content: 'Learn more',
          href: '/',
        },
      },
      {
        id: 3,
        header: 'Deriv MT5',
        description: 'The most popular and comprehensive CFDs platform.',
        icon: (
          <PartnersProductDerivMt5BrandLightLogoHorizontalIcon
            width={48}
            height={48}
          />
        ),
        size: 'md',
        align: 'start',
        color: 'gray',
        link: {
          content: 'Learn more',
          href: '/',
        },
      },
    ],
  },
};
