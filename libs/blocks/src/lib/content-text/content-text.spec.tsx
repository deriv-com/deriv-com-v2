import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentText from '.';
import { Text } from '@deriv/quill-design';

describe('ContentText', () => {
  it('should render content text correctly', () => {
    const { queryByText, container } = render(
      <ContentText title="Content Text Title" className="bg-solid-red-1000">
        <Text>Content Text description</Text>
      </ContentText>,
    );

    //render with correct title
    expect(queryByText('Content Text Title')).toBeInTheDocument();

    //render with correct children
    expect(queryByText('Content Text description')).toBeInTheDocument();

    expect(container.firstChild).toHaveClass('bg-solid-red-1000');
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
