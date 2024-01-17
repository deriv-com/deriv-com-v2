import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlockWrapper from '.';
import { Text } from '@deriv/quill-design';

describe('ContentText', () => {
  it('should render block correctly', () => {
    const { container, queryByText } = render(
      <BlockWrapper
        title="Title goes here"
        description="Description goes here"
        className="py-general-4xl"
      >
        <Text>Any content goes here</Text>
      </BlockWrapper>,
    );

    const header = screen.getByRole('heading', {
      name: 'Title goes here',
      level: 2,
    });

    //render with correct title
    expect(header).toBeInTheDocument();

    //render with correct className
    expect(container.firstChild).toHaveClass('py-general-4xl');

    //render with correct children
    expect(queryByText('Description goes here')).toBeInTheDocument();
  });
});
