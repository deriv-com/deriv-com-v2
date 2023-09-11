import {
  Button,
  FluidContainer,
  Heading,
  useTheme,
} from '@deriv-com/quill-design';
import { useCallback } from 'react';

export function Index() {
  const { theme, toggleTheme } = useTheme();

  const changeTheme = useCallback(() => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, toggleTheme]);

  return (
    <FluidContainer>
      <Heading.H1>Current theme is {theme}</Heading.H1>
      <Button size="lg" onClick={changeTheme}>
        Toggle theme
      </Button>
    </FluidContainer>
  );
}

export default Index;
