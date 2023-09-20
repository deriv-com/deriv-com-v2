import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentLimitless from '.';

describe('ContentLimitless', () => {
  it('renders with the correct class names and content', () => {
    const className = 'text-heading-hero';
    const title = 'Title Goes Here';
    const description =
      'Description goes here description goes here description goes here description goes here';

    const { getByText } = render(
      <ContentLimitless
        className={className}
        title={title}
        description={description}
      ></ContentLimitless>
    );
    const titleElement = getByText(title);

    //renders with correct Hero classname
    expect(titleElement).toHaveClass(className);

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    //renders with the correct description
    expect(getByText(description)).toBeInTheDocument();
  });
});
