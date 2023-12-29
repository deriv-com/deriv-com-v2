import { useNavigation } from '@deriv-com/hooks';
import { StandaloneBarsBoldIcon } from '@deriv/quill-icons/Standalone';

type MobileNavToggleProps = {
  'data-cy'?: string;
};

export const MobileNavToggle = (props: MobileNavToggleProps) => {
  const { toggleMobileNav } = useNavigation();

  return (
    <StandaloneBarsBoldIcon
      onClick={toggleMobileNav}
      iconSize="md"
      className="cursor-pointer lg:hidden"
      data-cy={props['data-cy']}
    />
  );
};

export default MobileNavToggle;
