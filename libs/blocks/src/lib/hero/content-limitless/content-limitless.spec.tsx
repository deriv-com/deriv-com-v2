import { getByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentLimitless from '.';
import { Button, Heading } from '@deriv/quill-design';

describe('ContentLimitlesss', () => {
  beforeEach(() => {
    render(
      <ContentLimitless
        className={'bg-solid-red-500'}
        title={'title goes here'}
        description={'description goes here'}
        content={
          <div>
            <Heading.H2>content goes here</Heading.H2>
          </div>
        }
      >
        <Button>Click me</Button>
      </ContentLimitless>,
    );
  });
  it('should render heading successfully', () => {
    const heading = screen.getByRole('heading', {
      name: 'title goes here',
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render description successfully', () => {
    const description = screen.getByText('description goes here');
    expect(description).toBeInTheDocument();
  });

  it('should render children passed to it', () => {
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it("should render content passed to it's content prop", () => {
    const content = screen.getByRole('heading', {
      name: 'content goes here',
      level: 2,
    });
    expect(content).toBeInTheDocument();
  });

  it('should render correct classname', () => {
    const section = screen.getByTestId('limitless-section');
    expect(section).toHaveClass('bg-solid-red-500');
  });
});
