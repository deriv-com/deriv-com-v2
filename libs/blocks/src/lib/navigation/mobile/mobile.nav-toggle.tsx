import { useNavigation } from '@deriv-com/hooks';
import { LabelPairedBarsBoldIcon } from '@deriv/quill-icons';

export const MobileNavToggle = () => {
  const { toggleMobileNav } = useNavigation();

  return (
    <LabelPairedBarsBoldIcon
      iconSize="md"
      onClick={toggleMobileNav}
      className="sm:hidden"
    />
  );
};

export default MobileNavToggle;
