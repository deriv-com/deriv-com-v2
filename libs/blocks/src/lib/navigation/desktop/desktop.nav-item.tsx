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
        className="group flex h-full items-center justify-center px-general-lg text-center"
        onMouseEnter={() => {
          setShowLangContent?.(false);
          if (item.type === 'nav-dropdown') {
            onListItemHover?.(navItemName);
          }
        }}
      >
        {item.type === 'direct' ? (
          <CustomLink
            className="text-typography-default group-hover:text-typography-prominent"
            href={item.href}
            hasHoverDecoration={false}
            onMouseEnter={() => {
              setShowLangContent?.(false);
              onListItemHover?.(navItemName);
            }}
            target={item.target}
          >
            {item.text}
          </CustomLink>
        ) : (
          <Text
            size="sm"
            className="cursor-pointer hover:text-typography-prominent"
          >
            {item.text}
          </Text>
        )}
      </li>
    )
  );
};

export default DesktopNavItem;
