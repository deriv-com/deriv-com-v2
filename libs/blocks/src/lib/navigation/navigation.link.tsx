import { CustomLink } from '@deriv-com/components';
import { DirectNavLink } from '@deriv-com/providers';
import { Text, qtJoin, qtMerge } from '@deriv/quill-design';

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
      className={qtMerge(
        'justify-center gap-gap-md text-body-md font-bold leading-body-md',
        item.icon && 'grid grid-cols-[24px_1fr]',
        !item.icon && item.description && 'flex flex-col',
        className,
      )}
    >
      {item.icon ? item.icon : null}
      {item.text}
      <Text size="sm" className={qtJoin(item.icon && 'col-start-2')}>
        {item.description}
      </Text>
    </CustomLink>
  );
};

export default NavigationLink;
