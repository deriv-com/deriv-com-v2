import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import StatCompany from '.';

const color = {
  coral: 'bg-solid-coral-700',
  white: 'bg-solid-slate-50',
  dark: 'bg-solid-slate-1200',
};

const textColor = {
  coral: 'text-solid-slate-50',
  white: 'text-solid-slate-1400',
  dark: 'text-solid-slate-50',
};

describe('Stat Company Card', () => {
  it('should render correct white card', () => {
    render(
      <StatCompany
        header="Stat Card Title"
        description="Stat Card description"
        color="white"
      />,
    );

    const header = screen.getByRole('heading', { level: 3 });
    const description = screen.getByText('Stat Card description');
    const container = screen.getByTestId('stat-card-container');

    expect(container).toHaveClass(color['white']);
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass(textColor['white']);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass(textColor['white']);
  });
});

it('should render correct coral card', () => {
  render(
    <StatCompany
      header="Stat Card Title"
      description="Stat Card description"
      color="coral"
    />,
  );

  const header = screen.getByRole('heading', { level: 3 });
  const description = screen.getByText('Stat Card description');
  const container = screen.getByTestId('stat-card-container');

  expect(container).toHaveClass(color['coral']);
  expect(header).toHaveClass(textColor['coral']);
  expect(description).toHaveClass(textColor['coral']);
});

it('should render correct dark card', () => {
  render(
    <StatCompany
      header="Stat Card Title"
      description="Stat Card description"
      color="dark"
    />,
  );

  const header = screen.getByRole('heading', { level: 3 });
  const description = screen.getByText('Stat Card description');
  const container = screen.getByTestId('stat-card-container');

  expect(container).toHaveClass(color['dark']);
  expect(header).toHaveClass(textColor['dark']);
  expect(description).toHaveClass(textColor['dark']);
});
