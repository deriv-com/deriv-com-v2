import { useNavigation } from '@deriv-com/hooks';
import { StandaloneBarsBoldIcon } from '@deriv/quill-icons/Standalone';

export const MobileNavToggle = () => {
  const { toggleMobileNav } = useNavigation();

  return (
    <StandaloneBarsBoldIcon
      onClick={toggleMobileNav}
      iconSize="md"
      className="md:hidden"
    />
  );
};

export default MobileNavToggle;
