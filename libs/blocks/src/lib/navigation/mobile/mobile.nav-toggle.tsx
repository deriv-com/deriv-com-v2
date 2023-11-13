import { useNavigation } from '@deriv-com/hooks';
import { LabelPairedBarsBoldIcon } from '@deriv/quill-icons/LabelPaired';

export const MobileNavToggle = () => {
  const { toggleMobileNav } = useNavigation();

  return (
    <LabelPairedBarsBoldIcon
      iconSize="md"
      onClick={toggleMobileNav}
      className="md:hidden"
    />
  );
};

export default MobileNavToggle;
