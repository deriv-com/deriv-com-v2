import { CustomLink } from '@deriv-com/components';
import { DirectNavLink } from '@deriv-com/providers';
import { Text, qtJoin, qtMerge } from '@deriv/quill-design';
import { LabelPairedArrowUpRightRegularIcon } from '@deriv/quill-icons/LabelPaired';

export interface NavigationLinkProps {
  item: DirectNavLink;
  className?: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  item,
  className,
}) => {
  return (
    <CustomLink
      href={item.href}
      hasHoverDecoration={false}
      className={qtMerge(
        'group w-full justify-start gap-gap-md py-general-sm font-bold',
        item.icon && 'grid grid-cols-[24px_1fr]',
        !item.icon && item.description && 'flex flex-col',
        className,
      )}
    >
      {item.icon ? item.icon : null}
      <div className="flex gap-gap-sm">
        <Text size="md" bold className="group-hover:text-typography-prominent">
          {item.text}
        </Text>
        {item.external && <LabelPairedArrowUpRightRegularIcon iconSize="sm" />}
      </div>
      {item.description ? (
        <Text size="sm" className={qtJoin(item.icon && 'col-start-2')}>
          {item.description}
        </Text>
      ) : null}
    </CustomLink>
  );
};

export default NavigationLink;
