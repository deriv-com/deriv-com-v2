import { CustomLink } from '@deriv-com/components';
import { useNavigation } from '@deriv-com/hooks';
import { DirectNavLink } from '@deriv-com/providers';
import { qtMerge } from '@deriv/quill-design';
import { LabelPairedArrowUpRightRegularIcon } from '@deriv/quill-icons/LabelPaired';

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
      hasHoverDecoration={false}
      className={qtMerge(
        'py-general-sm text-body-md font-bold leading-body-md',
        'hover:text-typography-prominent',
        className,
      )}
      onClick={toggleMobileNav}
      target={item.target}
    >
      {item.text}
      {item.external && <LabelPairedArrowUpRightRegularIcon iconSize="sm" />}
    </CustomLink>
  );
};

export default MobileNavLink;
