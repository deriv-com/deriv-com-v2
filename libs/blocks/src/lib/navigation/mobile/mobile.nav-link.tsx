import { CustomLink } from '@deriv-com/components';
import { useNavigation } from '@deriv-com/hooks';
import { DirectNavLink } from '@deriv-com/providers';
import { qtMerge } from '@deriv/quill-design';

export interface MobileNavLinkProps {
  item: DirectNavLink;
  className?: string;
}

export const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  item,
  className,
}) => {
  const { toggleMobileNav } = useNavigation();

  return (
    <CustomLink
      href={item.href}
      className={qtMerge(
        'py-general-sm text-body-md font-bold leading-body-md text-typography-default',
        className,
      )}
      onClick={toggleMobileNav}
    >
      {item.text}
    </CustomLink>
  );
};

export default MobileNavLink;
