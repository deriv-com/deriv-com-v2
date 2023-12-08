import { NavLinkItems } from '@deriv-com/providers';
import DesktopNavItem from './desktop.nav-item';

export interface NavListProps {
  items: NavLinkItems;
}

const NavList = ({ items }: NavListProps) => {
  return (
    <ul className="flex px-general-md xl:flex-1">
      {Object.keys(items).map((navItemName) => (
        <DesktopNavItem
          key={navItemName}
          item={items[navItemName]}
          navItemName={navItemName}
        />
      ))}
    </ul>
  );
};

export default NavList;
