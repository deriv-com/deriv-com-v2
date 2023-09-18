import { twclsx } from '@deriv-com/utils';
import { Button, FluidContainer, Heading, useTheme } from '@deriv/quill-design';
import { useCallback } from 'react';

export interface HomeTemplateProps {
  title: string;
}

export function HomeTemplate({ title }: HomeTemplateProps) {
  const { theme, toggleTheme } = useTheme();

  const changeTheme = useCallback(() => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, toggleTheme]);

  return (
    <FluidContainer>
      <Heading.Hero>Welcome to {title}</Heading.Hero>
      <Heading.H1>Current theme is {theme}</Heading.H1>
      <Button size="lg" onClick={changeTheme}>
        Toggle theme
      </Button>
    </FluidContainer>
  );
}

export default HomeTemplate;
