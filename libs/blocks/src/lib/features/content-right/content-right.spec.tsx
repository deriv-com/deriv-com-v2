import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContentRight from '.';
import { Button, Heading } from '@deriv/quill-design';

const ContentRightContent = () => (
  <Heading.H2 id="content-right-content">This is a heading content</Heading.H2>
);

describe('ContentRight', () => {
  const className = 'text-heading-h2';
  const title = 'This is the title';
  const description = 'Description here';

  it('renders with correct class names and content', () => {
    const { getByText } = render(
      <ContentRight
        className={className}
        title={title}
        description={description}
        content={ContentRightContent}
      >
        <Button>This is a button</Button>
      </ContentRight>,
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
      <ContentRight title={title} content={ContentRightContent}>
        <Button id="test-button">This is a button</Button>
      </ContentRight>,
    );

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    //renders with the correct description
    expect(document.getElementById('content-description')).toBeNull();

    //renders with the correct children
    expect(document.getElementById('test-button')).toBeInTheDocument();

    //render with correct content
    expect(
      document.getElementById('content-right-content'),
    ).toBeInTheDocument();
  });
});
