import { useNavigation } from '@deriv-com/hooks';
import { Text } from '@deriv/quill-design';
import MobileNavLink from './mobile.nav-link';

export const MobileNavList = () => {
  const { navItems, setActiveMenu } = useNavigation();

  return (
    <ul className="flex flex-col">
      {Object.keys(navItems).map((navItemName) => {
        const { id, ...item } = navItems[navItemName];
        if (item.type === 'direct') {
          return <MobileNavLink item={item} key={navItemName} />;
        }
        return (
          <li key={navItemName} className="py-general-sm">
            <Text
              size="md"
              className="cursor-pointer text-typography-default"
              bold
              onClick={() => {
                setActiveMenu?.(navItemName);
              }}
            >
              {navItems[navItemName].text}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileNavList;
