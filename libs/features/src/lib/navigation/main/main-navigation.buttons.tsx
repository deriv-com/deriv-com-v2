import { MobileNavToggle } from '@deriv-com/blocks';
import { useNavigation } from '@deriv-com/hooks';
import { Button, useTheme } from '@deriv/quill-design';
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons/Standalone';

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
          colorStyle="coral"
          size="md"
          onClick={onTradersHubClick}
          renderLeftIcon={() => (
            <StandalonePlaceholderRegularIcon width={12} height={12} />
          )}
        >
          Traders Hub
        </Button>
      ) : (
        <>
          <Button
            variant="secondary"
            colorStyle="coral"
            size="md"
            onClick={onLoginClick}
          >
            Log in
          </Button>
          <Button size="md" className="hidden lg:block" onClick={onSignupClick}>
            Create free demo account
          </Button>
        </>
      )}

      <MobileNavToggle />
    </div>
  );
};

export default MainNavigationButtons;
