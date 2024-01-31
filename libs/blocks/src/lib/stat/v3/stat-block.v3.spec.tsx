import { cleanup, render, screen } from '@testing-library/react';
import V3StatBlock, { V3Item } from '.';
import '@testing-library/jest-dom';

const cards: V3Item[] = [
  { id: 1, title: 'Header one', description: 'description one' },
  { id: 2, title: 'Header two', description: 'description two' },
  { id: 3, title: 'Header three', description: 'description three' },
  { id: 4, title: 'Header four', description: 'description four' },
];

describe('V3StatBlock', () => {
  beforeEach(() => {
    render(<V3StatBlock items={cards} />);
  });

  afterEach(() => {
    cleanup();
  });
  it('should render all the item headings', () => {
    const headings = screen.getAllByRole('heading', {
      level: 3,
    });
    expect(headings.length).toBe(4);
    headings.forEach((headingElement, index) => {
      expect(headingElement).toHaveTextContent(String(cards[index].title));
    });
  });

  it('should render all the item descriptions', () => {
    cards.forEach((cardItem) => {
      expect(
        screen.getByText(String(cardItem.description)),
      ).toBeInTheDocument();
    });

    expect.assertions(4);
  });
});
