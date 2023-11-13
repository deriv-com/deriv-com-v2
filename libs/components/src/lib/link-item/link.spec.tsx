import { render, screen } from '@testing-library/react';
import LinkItem from '.';
import { colorStyle, LinkItemDisabled, LinkItemTestSize } from './types';
import { StandaloneArrowLeftBoldIcon } from '@deriv/quill-icons/Standalone';
import '@testing-library/jest-dom';

describe('LinkItem', () => {
  it('should render correctly', () => {
    render(<LinkItem>Click me</LinkItem>);
    const LinkElement = screen.getByText(/click me/i);
    expect(LinkElement).toBeInTheDocument();
  });

  it('should render the classname', () => {
    render(<LinkItem className="px-300">Click me</LinkItem>);
    const LinkElement = screen.getByText(/click me/i);
    expect(LinkElement).toHaveClass('px-300');
  });

  it('should render chevron icon when hasIcon prop is true', () => {
    render(<LinkItem hasIcon>Click me</LinkItem>);
    const icon = screen.getByTestId('dt-link-item-chevron');
    expect(icon).toBeInTheDocument();
  });

  it('should render icon when a icon is pass', () => {
    render(<LinkItem icon={StandaloneArrowLeftBoldIcon}>Click me</LinkItem>);
    const icon = screen.getByTestId('dt-link-item-icon');
    expect(icon).toBeInTheDocument();
  });

  const colorStyles: colorStyle[] = ['black', 'white'];
  const sizes: LinkItemTestSize[] = ['caption', 'sm', 'md', 'lg', 'xl'];

  colorStyles.forEach((colorStyle) => {
    sizes.forEach((size) => {
      it(`should render correctly with ${size} size and color ${colorStyle}`, () => {
        const { container } = render(
          <LinkItem size={size} colorStyle={colorStyle}>
            Click me - {size}
          </LinkItem>,
        );
        expect(container).toMatchSnapshot();
      });
    });
  });

  const disabled: LinkItemDisabled[] = [true, false];
  disabled.forEach((dis) => {
    it(`should render correctly with disabled ${dis}`, () => {
      render(<LinkItem disabled={dis}>Click me disabled</LinkItem>);
      const LinkElement = screen.getByText('Click me disabled');
      expect(LinkElement).toMatchSnapshot();
    });
  });
});
