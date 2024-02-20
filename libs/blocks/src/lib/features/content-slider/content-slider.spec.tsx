import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContentSlider from '.';
import { Button } from '@deriv/quill-design';
import { cards } from './mock-data';

const className = 'text-heading-h2';
const title = 'This is the title';
const description = 'Description here';
const cta = 'CTA';

describe('CardSlider', () => {
  beforeEach(() => {
    render(
      <ContentSlider
        className={className}
        title={title}
        description={description}
        cardSliderProps={{
          slideClasses: 'max-w-xs',
          variant: 'ContentBottom',
          cards: cards,
        }}
        cta={() => <Button>{cta}</Button>}
      />,
    );
  });

  it(`should render the correct class name '${className}' passing in`, () => {
    expect(document.querySelector(`.${className}`)).toBeInTheDocument();
  });

  it(`should render the correct title '${title}'`, () => {
    expect(
      screen.getByRole('heading', { name: title, level: 2 }),
    ).toBeInTheDocument();
  });

  it(`should render the correct description '${description}'`, () => {
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render the correct cta', () => {
    expect(screen.getByRole('button', { name: cta })).toBeInTheDocument();
  });

  cards.forEach((_, i) => {
    it(`should render the correct title '${title}'`, () => {
      expect(
        screen.getByRole('heading', { name: `Card ${i + 1}`, level: 4 }),
      ).toBeInTheDocument();
    });

    it(`should render the correct description '${description}'`, () => {
      expect(screen.getByText(`Description here ${i + 1}`)).toBeInTheDocument();
    });
  });
});
