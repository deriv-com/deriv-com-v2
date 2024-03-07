import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContentLeft from '.';
import { Button, Heading } from '@deriv/quill-design';

const className = 'text-heading-h2';
const title = 'This is the title';
const description = 'Description here';
const content = 'This is a heading content';
const child = 'This is a button';

const ContentLeftContent = () => <Heading.H3>{content}</Heading.H3>;

describe('ContentLeft', () => {
  beforeEach(() => {
    render(
      <ContentLeft
        className={className}
        title={title}
        description={description}
        content={ContentLeftContent}
      >
        <Button>{child}</Button>
      </ContentLeft>,
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
