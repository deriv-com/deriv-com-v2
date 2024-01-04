import { CustomLink } from '@deriv-com/components';
import { useNavigation } from '@deriv-com/hooks';
import { DirectNavLink } from '@deriv-com/providers';
import { qtMerge } from '@deriv/quill-design';
import { LabelPairedArrowUpRightSmRegularIcon } from '@deriv/quill-icons/LabelPaired';

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
        'text-typography-default',
        'py-general-sm text-body-md font-bold leading-body-md',
        'hover:text-typography-prominent',
        className,
      )}
      onClick={toggleMobileNav}
      target={item.target}
    >
      {item.text}
      {item.external && <LabelPairedArrowUpRightSmRegularIcon />}
    </CustomLink>
  );
};

export default MobileNavLink;
