import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@deriv/quill-design';
import Content from '.';

describe('Content', () => {
  beforeEach(() => {
    render(
      <Content
        className={'bg-solid-red-500'}
        title={'this is title'}
        description={'this is description'}
        center
      >
        <Button>Click me</Button>
      </Content>,
    );
  });
  it('should render heading successfully', () => {
    const heading = screen.getByRole('heading', {
      name: 'this is title',
      level: 1,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-center');
  });

  it('should render description successfully', () => {
    const description = screen.getByText('this is description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-center');
  });

  it('should render children passed to it', () => {
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('should render classname passed to it', () => {
    const section = document.querySelector('.bg-solid-red-500');
    expect(section).toBeInTheDocument();
  });
});
