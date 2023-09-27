import { CustomLink } from '@deriv-com/components';
import { BrandDerivWordmarkCoralIcon } from '@deriv/quill-icons';

export const MainNavigationLogo = () => {
  return (
    <CustomLink href={'/'}>
      <BrandDerivWordmarkCoralIcon width={73} height={24} />
    </CustomLink>
  );
};

export default MainNavigationLogo;
