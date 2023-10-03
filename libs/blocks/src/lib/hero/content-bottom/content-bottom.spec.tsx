import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentBottom from '.';
import { Text } from '@deriv/quill-design';

describe('ContentBottom', () => {
  beforeEach(() => {
    render(
      <ContentBottom title="Content Bottom Title" className="bg-solid-red-1000">
        <Text>Content Bottom description</Text>
      </ContentBottom>,
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
});
