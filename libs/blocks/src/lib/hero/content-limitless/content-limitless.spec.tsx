import React from 'react';
import { render } from '@testing-library/react';
import ContentLimitless from '.';

describe('ContentLimitless', () => {
  it('renders with the correct class names and content', () => {
    const className = 'test-class';
    const title = 'Title Goes Here';
    const description =
      'Description goes here description goes here description goes here description goes here';
    const childcomponent = <p>this is an image limitless hero</p>;
    const content = (
      <img
        className="w-full"
        src="https://placehold.co/712x800"
        alt="Placeholder"
      />
    );
    const fontSize = '2em';

    const { getByText } = render(
      <ContentLimitless
        className={className}
        title={title}
        description={description}
      >
        {childcomponent}
      </ContentLimitless>
    );
    const titleElement = getByText(title);
    const computedStyle = window.getComputedStyle(titleElement);

    //renders with the correct title
    expect(getByText(title)).toBeTruthy();

    //renders with the correct description
    expect(getByText(description)).toBeTruthy();

    //renders with the correct children
    expect(childcomponent).toBeTruthy();

    //renders with the correct content
    expect(content).toBeTruthy();

    //renders with correct font size
    expect(computedStyle.fontSize).toBe(fontSize);
  });
});
