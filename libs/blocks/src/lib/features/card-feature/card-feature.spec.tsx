import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cardsData } from './data';
import CardContentBlock from '.';

const className = 'text-heading-h2';
const title = 'This is the title';
const description = 'Description here';

describe('CardContent', () => {
  beforeEach(() => {
    render(
      <CardContentBlock
        title={title}
        description={description}
        variant="ContentBottom"
        className={className}
        cards={cardsData}
      />,
    );
  });

  it(`should render the correct class name '${className}' passing in`, () => {
    expect(document.querySelector(`.${className}`)).toBeInTheDocument();
  });

  it(`should render the title '${title}'`, () => {
    expect(
      screen.getByRole('heading', { name: title, level: 2 }),
    ).toBeInTheDocument();
  });

  it(`should render the description '${description}'`, () => {
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  cardsData.forEach((cardItem) => {
    it(`should render the card header '${cardItem.header}'`, () => {
      expect(
        screen.getByRole('heading', {
          name: cardItem.header,
          level: 4,
        }),
      ).toBeInTheDocument();
    });

    it(`should render the card description '${cardItem.description}'`, () => {
      expect(screen.getByText(cardItem.description)).toBeInTheDocument();
    });
  });
});
