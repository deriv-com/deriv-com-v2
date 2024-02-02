import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlatformBlockCard from '.';
import { data } from './mock-data';

const { title, description, cards } = data;

describe('ContentText', () => {
  beforeEach(() => {
    render(
      <PlatformBlockCard
        header={title}
        description={description}
        cards={cards}
      />,
    );
  });

  it('should render header correctly', () => {
    expect(
      screen.getByRole('heading', { name: title, level: 2 }),
    ).toBeInTheDocument();
  });

  it('should render description correctly', () => {
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render cards correctly', () => {
    cards.forEach((card) => {
      it('should render card header correctly', () => {
        expect(
          screen.getByRole('heading', { name: card.header, level: 3 }),
        ).toBeInTheDocument();
      });

      it('should render card description correctly', () => {
        expect(
          screen.getByRole('heading', { name: card.description, level: 3 }),
        ).toBeInTheDocument();
      });
    });
  });
});
