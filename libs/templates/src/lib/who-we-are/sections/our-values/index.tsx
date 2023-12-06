import { Features } from '@deriv-com/blocks';
import { CardContent } from '@deriv-com/components';
import {
  IllustrativeCompetenceIcon,
  IllustrativeCustomerFocusIcon,
  IllustrativeIntegrityIcon,
  IllustrativeTeamworkIcon,
} from '@deriv/quill-icons/Illustrative';

const ourValuesCards: CardContent[] = [
  {
    id: 1,
    header: 'Integrity',
    description:
      'We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully.',
    icon: <IllustrativeIntegrityIcon />,
    align: 'start',
    size: 'sm',
    color: 'light',
    className: 'h-full',
  },
  {
    id: 2,
    header: 'Customer focus',
    description:
      'We put the customer first and strive to build products that deliver the best customer experience.',
    align: 'start',
    size: 'sm',
    color: 'light',
    className: 'h-full',
    icon: <IllustrativeCustomerFocusIcon />,
  },
  {
    id: 3,
    header: 'Competence',
    description:
      'We value colleagues with the ability to use good judgement and an aptitude to learn and grow.',
    align: 'start',
    size: 'sm',
    color: 'light',
    className: 'h-full',
    icon: <IllustrativeCompetenceIcon />,
  },
  {
    id: 4,
    header: 'Teamwork',
    description:
      'We value team players that collaborate freely across departments with humility and ambition.',
    align: 'start',
    size: 'sm',
    color: 'light',
    className: 'h-full',
    icon: <IllustrativeTeamworkIcon />,
  },
];

export const WhoWeAreValues = () => {
  return (
    <Features.ContentSlider
      title="Our values are the fabric of our culture"
      className="bg-solid-slate-75"
      cardSliderProps={{
        cards: ourValuesCards,
        variant: 'ContentBottom',
        slideClasses: 'max-w-[286px] md:max-w-[296px]',
        className: 'w-full',
      }}
    />
  );
};
