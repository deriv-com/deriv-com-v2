import { CustomLink } from '@deriv-com/components';
import { useNavigation } from '@deriv-com/hooks';
import { NavItem } from '@deriv-com/providers';
import { Text } from '@deriv/quill-design';
import React from 'react';

export interface DesktopNavItemProps {
  item: NavItem;
  navItemName: string;
}

export const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
  item,
  navItemName,
}) => {
  const { onListItemHover } = useNavigation();

  return (
    !item.isMobileNavOnly && (
      <li
        className="flex h-full items-center justify-center px-general-lg text-center"
        onMouseEnter={() => {
          if (item.type === 'nav-dropdown') {
            onListItemHover?.(navItemName);
          }
        }}
      >
        {item.type === 'direct' ? (
          <CustomLink
            className="text-typography-default"
            href={item.href}
            onMouseEnter={() => {
              onListItemHover?.(navItemName);
            }}
          >
            {item.text}
          </CustomLink>
        ) : (
          <Text size="sm" className="cursor-pointer hover:text-typography-link">
            {item.text}
          </Text>
        )}
      </li>
    )
  );
};

export default DesktopNavItem;
