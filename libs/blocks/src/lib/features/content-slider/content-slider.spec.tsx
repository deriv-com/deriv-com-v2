import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContentSlider from '.';
import { Button } from '@deriv/quill-design';

describe('CardSlider', () => {
  const className = 'text-heading-h2';
  const title = 'This is the title';
  const description = 'Description here';
  const cta = () => (
    <div className="flex w-full justify-center" id="cta-container">
      <Button>CTA</Button>
    </div>
  );

  it('renders with correct classnames and content', () => {
    const { getByText } = render(
      <ContentSlider
        className={className}
        title={title}
        description={description}
        cta={cta}
      />,
    );
    const titleElement = getByText(title);

    //renders with correct classname
    expect(titleElement).toHaveClass(className);

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    //renders with the correct description
    expect(getByText(description)).toBeInTheDocument();

    //renders with the correct cta
    expect(document.getElementById('cta-container')).toBeInTheDocument();
  });

  it('renders without description and title', () => {
    render(<ContentSlider cta={cta} />);

    //renders with the correct title
    expect(document.querySelector('content-slider-title')).toBeNull();

    //renders with the correct description
    expect(document.getElementById('content-slider-description')).toBeNull();

    //renders with the correct cta
    expect(document.getElementById('cta-container')).toBeInTheDocument();
  });
});
