import { useNavigation } from '@deriv-com/hooks';
import MobileNavLink from './mobile.nav-link';

export const MobileNavContent = () => {
  const { activeItem } = useNavigation();
  return (
    <div className="flex w-full flex-col gap-gap-xl  overflow-y-auto overscroll-y-contain">
      {activeItem && activeItem.type === 'nav-dropdown' ? (
        <>
          {activeItem.columns.map((column) => (
            <div
              key={column.id}
              className="flex flex-col justify-between gap-gap-lg"
            >
              {column.header && (
                <MobileNavLink
                  item={column.header}
                  className="font-regular text-typography-subtle underline"
                />
              )}
              {column.items.map((subItem) => {
                return subItem.type === 'direct' ? (
                  <MobileNavLink item={subItem} key={subItem.id} />
                ) : (
                  <div
                    key={subItem.id}
                    className="flex flex-col justify-center gap-gap-md"
                  >
                    <MobileNavLink item={subItem.header} />
                    <div className="flex flex-col gap-gap-xl pl-general-md">
                      {subItem.subLinks.map((item) => (
                        <MobileNavLink item={item} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default MobileNavContent;
