import { useNavigation } from '@deriv-com/hooks';
import { IconButton } from '@deriv/quill-design';
import { LabelPairedBarsBoldIcon } from '@deriv/quill-icons/LabelPaired';

export const MobileNavToggle = () => {
  const { toggleMobileNav } = useNavigation();

  return (
    <IconButton
      colorStyle="black"
      size="lg"
      variant="tertiary"
      onClick={toggleMobileNav}
      icon={LabelPairedBarsBoldIcon}
    />
  );
};

export default MobileNavToggle;
