import type { Meta, StoryObj } from '@storybook/react';
import CardSlider from '.';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons/Illustrative';

const meta = {
  title: 'Components/CardSlider',
  component: CardSlider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '!py-2000 bg-background-primary-container',
    slideClasses: 'max-w-xs',
    variant: 'ContentBottom',
    cards: [
      {
        header: 'Card 1',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeProtectedAndSecureIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        header: 'Card 2',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeSupport247Icon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        header: 'Card 3',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeLicensedAndRegulatedIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        header: 'Card 4',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeSpreadsIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        header: 'Card 5',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeLicensedAndRegulatedIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
    ],
  },
};
