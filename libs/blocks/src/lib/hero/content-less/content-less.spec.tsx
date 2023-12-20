import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentLess from '.';
import { Button } from '@deriv/quill-design';

describe('ContentLess', () => {
  beforeEach(() => {
    render(
      <ContentLess
        className={'bg-solid-red-500'}
        title={'this is title'}
        description={'this is description'}
      >
        <Button>Click me</Button>
      </ContentLess>,
    );
  });
  it('should render heading successfully', () => {
    const heading = screen.getByRole('heading', {
      name: 'this is title',
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render description successfully', () => {
    const description = screen.getByText('this is description');
    expect(description).toBeInTheDocument();
  });

  it('should render children passed to it', () => {
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('should render classname passed to it', () => {
    const section = screen.getByTestId('content-less-section');
    expect(section).toHaveClass('bg-solid-red-500');
  });
});
