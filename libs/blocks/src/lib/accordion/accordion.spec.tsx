import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordionBlock from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';
import { AccordionProps } from '@deriv-com/components';

const childTitle = 'This is the title';
const subTitle = 'Subtitle goes here.';

const data: AccordionProps[][] = [
  [
    {
      icon: <StandaloneAndroidIcon />,
      title: childTitle,
      subtitle: subTitle,
      className: 'border-opacity-black-100 border-x-none',
      content: () => (
        <img
          className="flex w-full flex-1"
          src="https://placehold.co/640x320"
          alt="Placeholder"
        />
      ),
    },
  ],
];

describe('AccordionBlock', () => {
  it('renders with correct class names and content', () => {
    const className = 'text-heading-h2';
    const title = 'Title goes here';

    const { getByText } = render(
      <AccordionBlock
        title={title}
        variant="Flush"
        content={{
          data,
        }}
      />,
    );
    const titleElement = getByText(title);

    //renders with correct classname
    expect(titleElement).toHaveClass(className);

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    //renders with the correct title
    expect(getByText(subTitle)).toBeInTheDocument();
  });
});
