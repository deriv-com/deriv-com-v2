import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import Card from '.';
import { cardsData } from './mock-data';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons/Illustrative';

const meta = {
  title: 'Blocks/Features/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    cta: { control: 'function' },
    cards: { table: { type: { summary: 'CardContent[]' } } },
    cols: {
      options: ['two', 'three', 'four'],
      control: { type: 'radio' },
      table: { type: { summary: '"two", "three", "four"' } },
    },
    className: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumn: Story = {
  args: {
    hasPadding: true,
    description:
      'Description goes here description goes here description goes here description goes here',
    cta: (
      <div className="flex w-full justify-center">
        <Button>CTA</Button>
      </div>
    ),
    title: '20+ years of proven excellence',
    cols: 'two',
    cards: cardsData,
  },
};

export const ThreeColumn: Story = {
  args: {
    ...TwoColumn.args,
    cols: 'three',
  },
};

export const FourColumn: Story = {
  args: {
    ...TwoColumn.args,
    cols: 'four',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...TwoColumn.args,
    description: '',
  },
};

export const WithoutCTA: Story = {
  args: {
    ...TwoColumn.args,
    cta: '',
  },
};

export const WithoutPadding: Story = {
  args: {
    hasPadding: false,
    cols: 'two',
    cards: [
      {
        id: 1,
        header: 'Protected and secure',
        description:
          'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
        icon: <IllustrativeProtectedAndSecureIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
        link: {
          content: 'Learn more',
          href: '/',
        },
      },
      {
        id: 2,
        header: '24/7 support',
        description:
          'Reach our professional, multilingual team anytime via live chat.',
        icon: <IllustrativeSupport247Icon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
        link: {
          content: 'Learn more',
          href: '/',
        },
      },
      {
        id: 3,
        header: 'Regulated',
        description:
          'We are licensed and overseen by leading global financial authorities.',
        icon: <IllustrativeLicensedAndRegulatedIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
        link: {
          content: 'Learn more',
          href: '/',
        },
      },
      {
        id: 4,
        header: 'Reliable',
        icon: <IllustrativeSpreadsIcon />,
        description:
          'With 99.97% uptime, we process 5.6 million trades daily, offering seamless and uninterrupted trading.',
        color: 'gray',
        align: 'start',
        size: 'sm',
        link: {
          content: 'Learn more',
          href: '/',
        },
      },
    ],
  },
};
