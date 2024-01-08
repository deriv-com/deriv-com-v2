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
        id: 1,
        header: 'Card 1',
        minHeight: 'min-h-[240px]',
        description:
          'Description here. Description here. Description here. Description here. Description here. Description here. Description here. Description here.',
        icon: <IllustrativeProtectedAndSecureIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        id: 2,
        header: 'Card 2',
        minHeight: 'min-h-[240px]',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeSupport247Icon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        id: 3,
        header: 'Card 3',
        minHeight: 'min-h-[240px]',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeLicensedAndRegulatedIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        id: 4,
        header: 'Card 4',
        minHeight: 'min-h-[240px]',
        description:
          'Description here. Description here. Description here. Description here.',
        icon: <IllustrativeSpreadsIcon />,
        color: 'gray',
        align: 'start',
        size: 'sm',
      },
      {
        id: 5,
        header: 'Card 5',
        minHeight: 'min-h-[240px]',
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
