import { cleanup, render, screen } from '@testing-library/react';
import V2StatBlock from '.';
import { StatCardContent } from '@deriv-com/components';
import '@testing-library/jest-dom';

const cards: StatCardContent[] = [
  { header: 'Header one', description: 'description one' },
  { header: 'Header two', description: 'description two' },
  { header: 'Header three', description: 'description three' },
];

describe('V2 StatBlock', () => {
  beforeEach(() => {
    render(<V2StatBlock cards={cards} />);
  });

  afterEach(() => {
    cleanup();
  });
  it('should render all the card headings', () => {
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(3);
    headings.forEach((headingElement, index) => {
      expect(headingElement).toHaveTextContent(cards[index].header || '');
    });
  });

  it('should render all the card descriptions', () => {
    cards.forEach((cardItem) => {
      expect(screen.getByText(cardItem.description)).toBeInTheDocument();
    });

    expect.assertions(3);
  });
});
