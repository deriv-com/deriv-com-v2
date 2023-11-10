import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordionBlock from '.';
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone';

const childTitle = 'This is the title';
const subTitle = 'Subtitle goes here';

const data = [
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
];

describe('AccordionBlock', () => {
  it('renders with correct class names and content', () => {
    const className = 'text-heading-h2';
    const title = 'Title goes here';
    const childClassName = 'text-heading-h6';

    const { getByText } = render(
      <AccordionBlock
        title={title}
        variant="Flush"
        content={{
          data: data,
        }}
      />,
    );
    const titleElement = getByText(title);

    //renders with correct classname
    expect(titleElement).toHaveClass(className);

    //renders with the correct title
    expect(getByText(title)).toBeInTheDocument();

    const childTitleElement = getByText(childTitle);

    //renders with correct classname
    expect(childTitleElement).toHaveClass(childClassName);

    //renders with the correct title
    expect(getByText(subTitle)).toBeInTheDocument();
  });
});
