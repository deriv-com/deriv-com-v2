import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FeaturesV4 from '.';
import { Button, Heading } from '@deriv/quill-design';

const content = <Heading.H3>content</Heading.H3>;
const title = 'this is title';
const description = 'this is description';

describe('FeaturesV4', () => {
  beforeEach(() => {
    render(
      <FeaturesV4 title={title} description={description} content={content}>
        <Button>Click me</Button>
      </FeaturesV4>,
    );
  });

  it('should rebder heading correctly', () => {
    const heading = screen.getByRole('heading', {
      name: title,
      level: 2,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render description correctly', () => {
    const desc = screen.getByText(description);
    expect(desc).toBeInTheDocument();
  });

  it('should render children passed to it', () => {
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('should render content passed to it', () => {
    const data = screen.getByRole('heading', { name: 'content', level: 3 });
    expect(data).toBeInTheDocument();
  });
});

describe('Content Position', () => {
  it('Should render Feature Block correct content left', () => {
    const { container } = render(
      <FeaturesV4
        title={title}
        description={description}
        content={content}
        variant="content-left"
      >
        <Button>Click me</Button>
      </FeaturesV4>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render Feature Block correct content right', () => {
    const { container } = render(
      <FeaturesV4
        title={title}
        description={description}
        content={content}
        variant="content-right"
      >
        <Button>Click me</Button>
      </FeaturesV4>,
    );
    expect(container).toMatchSnapshot();
  });
});
