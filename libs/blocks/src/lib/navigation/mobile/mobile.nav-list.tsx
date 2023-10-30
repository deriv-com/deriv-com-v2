import { useNavigation } from '@deriv-com/hooks';
import { Text } from '@deriv/quill-design';

export const MobileNavList = () => {
  const { navItems, setActiveMenu } = useNavigation();

  return (
    <ul className="flex flex-col gap-gap-lg">
      {Object.keys(navItems).map((navItemName) => (
        <li key={navItemName}>
          <Text
            size="md"
            bold
            onClick={() => {
              setActiveMenu?.(navItemName);
            }}
          >
            {navItems[navItemName].text}
          </Text>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavList;
