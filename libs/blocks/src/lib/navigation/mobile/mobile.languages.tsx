import { Text } from '@deriv/quill-design';
import { FlagUnitedKingdomIcon } from '@deriv/quill-icons/Flags';

export const MobileLanguages = () => {
  return (
    <div className="border-t-xs border-opacity-black-100 pt-general-md">
      <div className="flex items-center gap-gap-md py-general-sm">
        <FlagUnitedKingdomIcon width={24} height={16} />
        <Text bold>English</Text>
      </div>
    </div>
  );
};

export default MobileLanguages;
