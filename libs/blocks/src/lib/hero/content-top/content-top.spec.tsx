import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentTop from '.';
import { Text } from '@deriv/quill-design';

const title = 'Content Bottom Title';
const className = 'bg-solid-red-1000';

describe('ContentTop', () => {
  beforeEach(() => {
    render(
      <ContentTop title={title} className={className}>
        <Text>Content Bottom description</Text>
      </ContentTop>,
    );
  });

  it('should render heading successfully', () => {
    const heading = screen.getByRole('heading', {
      name: 'Content Bottom Title',
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render description successfully', () => {
    const description = screen.getByText('Content Bottom description');
    expect(description).toBeInTheDocument();
  });

  it('should render className pass into section', () => {
    const section = document.querySelector(`.${className}`);
    expect(section).toBeInTheDocument();
  });
});
