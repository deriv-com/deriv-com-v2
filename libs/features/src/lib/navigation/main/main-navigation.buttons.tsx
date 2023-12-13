import { MobileNavToggle } from '@deriv-com/blocks';
import { useNavigation } from '@deriv-com/hooks';
import { Button, useTheme } from '@deriv/quill-design';
import { LabelPairedGridBoldIcon } from '@deriv/quill-icons/LabelPaired';

export const MainNavigationButtons = () => {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, setIsLoggedIn } = useNavigation();

  const onLoginClick = () => {
    setIsLoggedIn?.(true);
  };

  const onSignupClick = () => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  const onTradersHubClick = () => {
    setIsLoggedIn?.(false);
  };

  return (
    <div className="flex flex-row items-center gap-gap-md">
      {isLoggedIn ? (
        <Button
          variant="secondary"
          colorStyle="black"
          size="lg"
          onClick={onTradersHubClick}
          icon={LabelPairedGridBoldIcon}
          iconPosition="start"
        >
          Traders Hub
        </Button>
      ) : (
        <>
          <Button
            variant="secondary"
            colorStyle="black"
            size="lg"
            onClick={onLoginClick}
          >
            Log in
          </Button>
          <Button size="lg" className="hidden lg:block" onClick={onSignupClick}>
            Open demo account
          </Button>
        </>
      )}

      <MobileNavToggle />
    </div>
  );
};

export default MainNavigationButtons;
