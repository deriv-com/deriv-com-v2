import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AccountComparison from '.';
import { Heading } from '@deriv/quill-design';

const Content = () => <Heading.H2>This is a heading content</Heading.H2>;

describe('AccountComparison', () => {
  it('renders with correct class names and content', () => {
    const className = 'text-heading-h2';
    const title = 'This is the title';
    const description = 'Description here';

    const { getByText } = render(
      <AccountComparison
        title={title}
        description={description}
        content={Content}
      />,
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
