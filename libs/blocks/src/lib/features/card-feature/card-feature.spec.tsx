import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardContentBlock from '.';
import {
  IllustrativeLicensedAndRegulatedIcon,
  IllustrativeProtectedAndSecureIcon,
  IllustrativeSpreadsIcon,
  IllustrativeSupport247Icon,
} from '@deriv/quill-icons';
import { CardContent } from '@deriv-com/components';

const cards: CardContent[] = [
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
];

describe('CardContent', () => {
  beforeEach(() => {
    render(
      <CardContentBlock
        title={'this is a title'}
        description={'this is a description'}
        cardsVariant="ContentBottom"
        cards={cards}
      />,
    );
  });

  it("should render the title 'this is a title'", () => {
    expect(
      screen.getByRole('heading', { name: 'this is a title', level: 2 }),
    ).toBeInTheDocument();
  });

  it("should render the description 'this is a description'", () => {
    expect(screen.getByText('this is a description')).toBeInTheDocument();
  });

  cards.forEach((cardItem) => {
    it("should render the card header '" + cardItem.header + "'", () => {
      expect(
        screen.getByRole('heading', {
          name: cardItem.header,
        }),
      ).toBeInTheDocument();
    });

    it(
      "should render the card description '" + cardItem.description + "'",
      () => {
        expect(
          screen.getByText(cardItem.description || ''),
        ).toBeInTheDocument();
      },
    );
  });
});
