import { MobileNavToggle } from '@deriv-com/blocks';
import { Button, useTheme } from '@deriv/quill-design';

export const MainNavigationButtons = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-row items-center gap-gap-md">
      <Button
        variant="secondary"
        colorStyle="coral"
        size="md"
        onClick={() => {
          toggleTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        Log in
      </Button>
      <Button size="md" className="hidden lg:block">
        Create free demo account
      </Button>
      <MobileNavToggle />
    </div>
  );
};

export default MainNavigationButtons;
