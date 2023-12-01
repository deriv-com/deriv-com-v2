import { CustomLink } from '@deriv-com/components';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
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
  const { setShowLangContent } = useLanguageSwitcher();

  return (
    !item.isMobileNavOnly && (
      <li
        className="flex h-full items-center justify-center px-general-lg text-center"
        onMouseEnter={() => {
          setShowLangContent?.(false);
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
              setShowLangContent?.(false);
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
