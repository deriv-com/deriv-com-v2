import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Base from '.';
import { Button } from '@deriv/quill-design';

describe('CardContent', () => {
  beforeEach(() => {
    render(
      <Base
        title={'this is a title'}
        description={'this is a description'}
        cta={<Button data-testid="test-cta">Test</Button>}
      >
        <Button data-testid="test-children">Children</Button>
      </Base>,
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

  it('should render cta', () => {
    expect(screen.getByTestId('test-cta')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    expect(screen.getByTestId('test-children')).toBeInTheDocument();
  });
});
