import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, Heading } from '@deriv/quill-design';
import FooterCTABlock from '.';

const image = (
  <>
    <img
      className="hidden w-full flex-1 md:flex"
      src="https://placehold.co/712x800"
      alt="Placeholder"
      id="cta-bg"
    />
    <img
      className="flex w-full flex-1 md:hidden"
      src="https://placehold.co/256x496"
      alt="Placeholder"
      id="cta-bg"
    />
  </>
);

describe('ContentLeft', () => {
  it('renders with correct the content', () => {
    const className = 'text-heading-h2';

    render(
      <FooterCTABlock className={className} image={image} padding>
        <div
          className="flex h-full flex-col items-start justify-center gap-gap-3xl"
          id="cta-children"
        >
          <Heading.H2 className="text-opacity-white-800">
            This is the children
          </Heading.H2>
          <Button>CTA Button</Button>
        </div>
      </FooterCTABlock>,
    );

    //renders with correct classname
    expect(document.getElementById('cta-container')).toHaveClass(className);

    //renders with the correct background image
    expect(document.getElementById('cta-bg')).toBeInTheDocument();

    //renders with the correct children
    expect(document.getElementById('cta-children')).toBeInTheDocument();

    //render with the correct padding
    expect(document.getElementById('cta-container')).toHaveClass(
      'py-general-4xl',
    );
  });

  it('renders with the correct padding', () => {
    const className = 'text-heading-h2';

    render(
      <FooterCTABlock className={className} image={image}>
        <div
          className="flex h-full flex-col items-start justify-center gap-gap-3xl"
          id="cta-children"
        >
          <Heading.H2 className="text-opacity-white-800">
            This is the children
          </Heading.H2>
          <Button>CTA Button</Button>
        </div>
      </FooterCTABlock>,
    );

    //renders with correct classname
    expect(document.getElementById('cta-container')).toHaveClass(className);

    //renders with the correct background image
    expect(document.getElementById('cta-bg')).toBeInTheDocument();

    //renders with the correct children
    expect(document.getElementById('cta-children')).toBeInTheDocument();

    //render with the correct padding
    expect(document.getElementById('cta-container')).toHaveClass(
      'py-general-xl',
    );
  });
});
