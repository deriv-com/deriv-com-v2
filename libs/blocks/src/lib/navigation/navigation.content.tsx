import { useNavigation } from '@deriv-com/hooks';
import NavigationLink from './navigation.link';

export const NavigationContent = () => {
  const { activeItem } = useNavigation();
  return (
    <div className="my-general-xl grid w-full grid-cols-4 items-start gap-gap-3xl overflow-y-auto overscroll-y-contain py-general-lg">
      {activeItem && activeItem.type === 'nav-dropdown' ? (
        <>
          {activeItem.columns.map((column) => (
            <div
              key={column.id}
              className="flex flex-col justify-center gap-gap-lg"
            >
              {column.header && (
                <NavigationLink
                  item={column.header}
                  className="font-regular text-typography-subtle underline"
                />
              )}
              {column.items.map((subItem) => {
                return subItem.type === 'direct' ? (
                  <NavigationLink item={subItem} key={subItem.id} />
                ) : (
                  <div
                    key={subItem.id}
                    className="flex flex-col justify-center gap-gap-md"
                  >
                    <NavigationLink item={subItem.header} />
                    <div className="flex flex-col gap-gap-xl pl-general-md">
                      {subItem.subLinks.map((item) => (
                        <NavigationLink item={item} />
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
