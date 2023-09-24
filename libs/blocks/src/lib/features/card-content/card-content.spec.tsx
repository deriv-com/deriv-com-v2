import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardContent from '.';

describe('CardContent', () => {
  it('renders with correct class names and content', () => {
    const className = 'text-heading-h2';
    const title = 'This is the title';
    const description = 'Description here';

    const { getByText } = render(
      <CardContent
        className={className}
        title={title}
        description={description}
      >
        <p>Content</p>
      </CardContent>,
    );
    const titleElement = getByText(title);

    //renders with correct classname
    expect(titleElement).toHaveClass(className);

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    //renders with the correct description
    expect(getByText(description)).toBeInTheDocument();
  });
});
