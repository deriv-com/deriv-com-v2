import React, { useEffect, useState } from 'react';
import { CustomLink } from '@deriv-com/components';
import { useLanguageSwitcher, useNavigation } from '@deriv-com/hooks';
import { NavItem } from '@deriv-com/providers';
import { Text } from '@deriv/quill-design';
export interface DesktopNavItemProps {
  item: NavItem;
  navItemName: string;
}
const removeTrailingSlash = (str: string) => {
  return str.replace(/\/+$/, '');
};
export const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
  item,
  navItemName,
}) => {
  const { onListItemHover } = useNavigation();
  const { setShowLangContent } = useLanguageSwitcher();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (item.type === 'direct' && typeof window !== undefined) {
      const { pathname } = window.location;
      setIsActive(
        removeTrailingSlash(pathname) === removeTrailingSlash(item.href),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            className="text-typography-default group-hover:text-typography-prominent aria-[current=true]:text-typography-prominent"
            href={item.href}
            hasHoverDecoration={false}
            onMouseEnter={() => {
              setShowLangContent?.(false);
              onListItemHover?.(navItemName);
            }}
            target={item.target}
            aria-current={isActive}
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
