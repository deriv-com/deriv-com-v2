import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AccountComparison from '.';
import { Heading } from '@deriv/quill-design';

const Content = () => <Heading.H5>This is a heading content</Heading.H5>;
const className = 'text-heading-h2';
const title = 'This is the title';
const description = 'Description here';

describe('AccountComparison', () => {
  it('renders with correct class names and content', () => {
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
    expect(titleElement).toBeInTheDocument();

    //renders with the correct description
    expect(getByText(description)).toBeInTheDocument();
  });

  it('render without descriptions', () => {
    const { container } = render(
      <AccountComparison content={Content} title={title} />,
    );

    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(container.querySelector('p')).toBeNull();
  });

  it('render without title', () => {
    const { container } = render(
      <AccountComparison content={Content} description={description} />,
    );

    expect(container.querySelector('h2')).toBeNull();
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('render without title and decription', () => {
    const { container } = render(<AccountComparison content={Content} />);

    expect(container.querySelector('h2')).toBeNull();
    expect(container.querySelector('p')).toBeNull();
  });
});
