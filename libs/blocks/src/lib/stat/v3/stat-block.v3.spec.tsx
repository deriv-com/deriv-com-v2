import { cleanup, render, screen } from '@testing-library/react';
import V3StatBlock, { V3Item } from '.';
import '@testing-library/jest-dom';

const cards: V3Item[] = [
  { title: 'Header one', description: 'description one' },
  { title: 'Header two', description: 'description two' },
  { title: 'Header three', description: 'description three' },
  { title: 'Header four', description: 'description four' },
];

describe('V3StatBlock', () => {
  beforeEach(() => {
    render(<V3StatBlock items={cards} />);
  });

  afterEach(() => {
    cleanup();
  });
  it('should render all the item headings', () => {
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(4);
    headings.forEach((headingElement, index) => {
      expect(headingElement).toHaveTextContent(cards[index].title);
    });
  });

  it('should render all the item descriptions', () => {
    cards.forEach((cardItem) => {
      expect(screen.getByText(cardItem.description)).toBeInTheDocument();
    });

    expect.assertions(4);
  });
});
