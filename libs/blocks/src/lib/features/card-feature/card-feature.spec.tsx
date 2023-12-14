import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cardsData } from './data';
import CardContentBlock from '.';

describe('CardContent', () => {
  beforeEach(() => {
    render(
      <CardContentBlock
        title={'this is a title'}
        description={'this is a description'}
        variant="ContentBottom"
        cards={cardsData}
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

  cardsData.forEach((cardItem) => {
    it("should render the card header '" + cardItem.header + "'", () => {
      expect(
        screen.getByRole('heading', {
          name: cardItem.header,
          level: 4,
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
