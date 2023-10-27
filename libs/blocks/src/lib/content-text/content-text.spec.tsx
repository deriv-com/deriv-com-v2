import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentText from '.';
import { Text } from '@deriv/quill-design';

describe('ContentText', () => {
  beforeEach(() => {
    render(
      <ContentText title="Content Text Title" className="bg-solid-red-1000">
        <Text>Content Text description</Text>
      </ContentText>,
    );
  });

  it('should render heading successfully', () => {
    const heading = screen.getByRole('heading', {
      name: 'Content Text Title',
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render description successfully', () => {
    const description = screen.getByText('Content Text description');
    expect(description).toBeInTheDocument();
  });
});
