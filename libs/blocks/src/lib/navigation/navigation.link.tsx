import { CustomLink } from '@deriv-com/components';
import { DirectNavLink } from '@deriv-com/providers';
import { Text, qtJoin } from '@deriv/quill-design';

export interface NavigationLinkProps {
  item: DirectNavLink;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ item }) => {
  return (
    <CustomLink
      href={item.href}
      className={qtJoin(
        'gap-gap-md justify-center text-body-md font-bold leading-body-md',
        item.icon && 'grid grid-cols-[24px_1fr]',
        !item.icon && item.description && 'flex flex-col',
      )}
    >
      {item.icon ? item.icon : null}
      {item.text}
      <Text
        size="sm"
        className={qtJoin('text-typography-subtle', item.icon && 'col-start-2')}
      >
        {item.description}
      </Text>
    </CustomLink>
  );
};

export default NavigationLink;
