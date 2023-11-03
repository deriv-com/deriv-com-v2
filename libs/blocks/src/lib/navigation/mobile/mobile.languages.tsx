import { Text } from '@deriv/quill-design';
import { FlagUnitedKingdomIcon } from '@deriv/quill-icons';

export const MobileLanguages = () => {
  return (
    <div className="my-general-xl flex items-center gap-gap-md border-t-xs border-opacity-black-100">
      <FlagUnitedKingdomIcon className="my-general-xl" width={24} height={16} />
      <Text bold>English</Text>
    </div>
  );
};

export default MobileLanguages;
