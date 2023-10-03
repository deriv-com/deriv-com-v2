import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deriv/quill-design';
import CardFeature from '.';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons';

const meta = {
  title: 'Blocks/Features/CardContent',
  component: CardFeature,
} satisfies Meta<typeof CardFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description:
      'Description goes here description goes here description goes here description goes here',
    cta: (
      <div className="flex w-full justify-center">
        <Button>CTA</Button>
      </div>
    ),
    title: '20+ years of proven excellence',
    cols: 'four',
    cards: [
      {
        header: 'Protected and secure',
        description:
          'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
        icon: <IllustrativeProtectedAndSecureIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        header: '24/7 support',
        description:
          'Reach our professional, multilingual team anytime via live chat.',
        icon: <IllustrativeSupport247Icon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        header: 'Regulated',
        description:
          'We are licensed and overseen by leading global financial authorities.',
        icon: <IllustrativeLicensedAndRegulatedIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        header: 'Reliable',
        icon: <IllustrativeSpreadsIcon />,
        description:
          'With 99.97% uptime, we process 5.6 million trades daily, offering seamless and uninterrupted trading.',
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
    ],
  },
};
