import { queryByText, render, screen } from '@testing-library/react';
import { IllustrativeProtectedAndSecureIcon } from '@deriv/quill-icons';
import '@testing-library/jest-dom';

import ContentSlider from '.';
import { Button } from '@deriv/quill-design';

describe('CardSlider', () => {
  const className = 'text-heading-h2';
  const title = 'This is the title';
  const description = 'Description here';
  it('renders with correct class names and content', () => {
    const { getByText } = render(
      <ContentSlider
        className={className}
        title={title}
        description={description}
        cardSliderProps={{
          slideClasses: 'max-w-xs',
          variant: 'ContentBottom',
          cards: Array.from({ length: 6 }, (_, i) => ({
            id: i,
            header: `Card ${i + 1}`,
            description:
              'Description here. Description here. Description here. Description here.',
            icon: <IllustrativeProtectedAndSecureIcon />,
            color: 'gray',
            align: 'start',
            size: 'sm',
          })),
        }}
        cta={<Button data-testid="cta-button">CTA</Button>}
      />,
    );

    //renders with correct classname
    expect(getByText(title)).toHaveClass(className);

    //renders with the correct title
    expect(
      screen.getByRole('heading', { name: title, level: 2 }),
    ).toBeInTheDocument();

    //renders with the correct description
    expect(getByText(description)).toBeInTheDocument();

    //renders with the correct cta
    expect(screen.getByTestId('cta-button')).toBeInTheDocument();
  });

  it('renders without title', () => {
    const { getByText } = render(
      <ContentSlider
        className={className}
        description={description}
        cardSliderProps={{
          slideClasses: 'max-w-xs',
          variant: 'ContentBottom',
          cards: Array.from({ length: 6 }, (_, i) => ({
            id: i,
            header: `Card ${i + 1}`,
            description:
              'Description here. Description here. Description here. Description here.',
            icon: <IllustrativeProtectedAndSecureIcon />,
            color: 'gray',
            align: 'start',
            size: 'sm',
          })),
        }}
        cta={<Button data-testid="cta-button">CTA</Button>}
      />,
    );

    //renders with the correct title
    expect(screen.queryByRole('heading', { name: title, level: 2 })).toBeNull();

    //renders with the correct cta
    expect(screen.getByTestId('cta-button')).toBeInTheDocument();

    //renders with the correct description
    expect(getByText(description)).toBeInTheDocument();
  });

  it('renders without description', () => {
    render(
      <ContentSlider
        className={className}
        cardSliderProps={{
          slideClasses: 'max-w-xs',
          variant: 'ContentBottom',
          cards: Array.from({ length: 6 }, (_, i) => ({
            id: i,
            header: `Card ${i + 1}`,
            description:
              'Description here. Description here. Description here. Description here.',
            icon: <IllustrativeProtectedAndSecureIcon />,
            color: 'gray',
            align: 'start',
            size: 'sm',
          })),
        }}
        cta={<Button data-testid="cta-button">CTA</Button>}
      />,
    );

    //renders with the correct title
    expect(screen.queryByRole('heading', { name: title, level: 2 })).toBeNull();

    //renders with the correct cta
    expect(screen.getByTestId('cta-button')).toBeInTheDocument();

    //renders with the correct description
    expect(screen.queryByTestId('card-description')).toBeNull();
  });
});
