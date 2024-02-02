import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlatformBlockTab from '.';
import { tabsItem } from './mock-data';

const { tabs, children, title, description, className } = tabsItem;

describe('ContentText', () => {
  beforeEach(() => {
    render(
      <PlatformBlockTab
        tabId="platform-tab"
        header={title}
        description={description}
        className={className}
        tabs={tabs}
        children={children}
      />,
    );
  });

  it('should render header correctly', () => {
    expect(
      screen.getByRole('heading', { name: title, level: 2 }),
    ).toBeInTheDocument();
  });

  it('should render description correctly', () => {
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render tabs correctly', () => {
    tabs.forEach((tab) => {
      expect(
        screen.getByRole('tab', { name: tab.content }),
      ).toBeInTheDocument();
    });
  });

  it('should render cards correctly', () => {
    children.forEach((card) => {
      it('should render the header in card correctly', () => {
        expect(
          screen.getByRole('heading', { name: card.header, level: 3 }),
        ).toBeInTheDocument();
      });

      it('should render the description in card correctly', () => {
        expect(screen.getByText(card.description)).toBeInTheDocument();
      });
    });
  });
});
