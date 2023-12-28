import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContentRight from '.';
import { Button, Heading } from '@deriv/quill-design';

const className = 'text-heading-h2';
const title = 'This is the title';
const description = 'Description here';
const content = 'This is a heading content';
const child = 'This is a button';

const ContentRightContent = () => <Heading.H3>{content}</Heading.H3>;

describe('ContentLeft', () => {
  beforeEach(() => {
    render(
      <ContentRight
        className={className}
        title={title}
        description={description}
        content={ContentRightContent}
      >
        <Button>{child}</Button>
      </ContentRight>,
    );
  });

  it('renders with correct class names passing in', () => {
    expect(document.querySelector(`.${className}`)).toBeInTheDocument();
  });

  it(`renders with correct title '${title}'`, () => {
    expect(
      screen.getByRole('heading', { name: title, level: 2 }),
    ).toBeInTheDocument();
  });

  it(`renders with correct description '${description}'`, () => {
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it(`renders with correct content`, () => {
    expect(
      screen.getByRole('heading', { name: content, level: 3 }),
    ).toBeInTheDocument();
  });

  it(`renders with correct children`, () => {
    expect(screen.getByRole('button', { name: child })).toBeInTheDocument();
  });
});
