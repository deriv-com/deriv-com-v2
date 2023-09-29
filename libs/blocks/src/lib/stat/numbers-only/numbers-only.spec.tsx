import { cleanup, render, screen } from '@testing-library/react';
import NumbersOnly from '.';
import { StatCardContent } from '@deriv-com/components';
import '@testing-library/jest-dom';

const cards: StatCardContent[] = [
  { id: 0, header: 'Header one', description: 'description one' },
  { id: 1, header: 'Header two', description: 'description two' },
  { id: 2, header: 'Header three', description: 'description three' },
];

describe('Numbers Only Block', () => {
  beforeEach(() => {
    render(<NumbersOnly cardsContent={cards} />);
  });

  afterEach(() => {
    cleanup();
  });
  it('should render all the card headings', () => {
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(3);
    headings.forEach((headingElement, index) => {
      expect(headingElement).toHaveTextContent(cards[index].header);
    });
  });

  it('should render all the card descriptions', () => {
    cards.forEach((cardItem) => {
      expect(screen.getByText(cardItem.description)).toBeInTheDocument();
    });

    expect.assertions(3);
  });
});
