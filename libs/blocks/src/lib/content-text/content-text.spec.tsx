import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentText from '.';
import { Text } from '@deriv/quill-design';

describe('ContentText', () => {
  it('should render content text correctly', () => {
    const { container, queryByText } = render(
      <ContentText title="Content Text Title" className="bg-solid-red-1000">
        <Text>Content Text Description</Text>
      </ContentText>,
    );

    const header = screen.getByRole('heading', {
      name: 'Content Text Title',
      level: 2,
    });

    //render with correct title
    expect(header).toBeInTheDocument();

    //render with correct className
    expect(container.firstChild).toHaveClass('bg-solid-red-1000');

    //render with correct children
    expect(queryByText('Content Text Description')).toBeInTheDocument();
  });

  it('renders without title', () => {
    const { container } = render(
      <ContentText>
        <Text>Content Text description</Text>
      </ContentText>,
    );

    expect(container.querySelector('h2')).toBeNull();
  });
});
