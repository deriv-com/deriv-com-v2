import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContentLeft from '.';
import { Button, Heading } from '@deriv/quill-design';

const ContentLeftContent = () => (
  <Heading.H2 id="content-left-content">This is a heading content</Heading.H2>
);

describe('ContentLeft', () => {
  const className = 'text-heading-h2';
  const title = 'This is the title';
  const description = 'Description here';

  it('renders with correct class names and content', () => {
    const { getByText } = render(
      <ContentLeft
        className={className}
        title={title}
        description={description}
        content={ContentLeftContent}
      >
        <Button>This is a button</Button>
      </ContentLeft>,
    );
    const titleElement = getByText(title);

    //renders with correct classname
    expect(titleElement).toHaveClass(className);

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    //renders with the correct description
    expect(getByText(description)).toBeInTheDocument();
  });

  it('render without description', () => {
    const { getByText } = render(
      <ContentLeft title={title} content={ContentLeftContent}>
        <Button id="test-button">This is a button</Button>
      </ContentLeft>,
    );

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    //renders with the correct description
    expect(document.getElementById('content-description')).toBeNull();

    //renders with the correct children
    expect(document.getElementById('test-button')).toBeInTheDocument();

    //render with correct content
    expect(document.getElementById('content-left-content')).toBeInTheDocument();
  });
});
