import { CustomLink } from '@deriv-com/components';
import { useNavigation } from '@deriv-com/hooks';
import { Text } from '@deriv/quill-design';
import NavigationLink from './navigation.link';

export const NavigationContent = () => {
  const { activeItem } = useNavigation();
  return (
    <div className="grid grid-cols-1 items-start  gap-gap-lg sm:my-general-xl sm:grid-cols-4 sm:py-general-lg">
      {activeItem && activeItem.type === 'nav-dropdown' ? (
        <>
          {activeItem.columns.map((column) => (
            <div
              key={column.id}
              className="flex flex-col justify-center gap-gap-lg"
            >
              {column.header && (
                <CustomLink
                  href={column.header?.href}
                  className="text-typography-subtle underline"
                >
                  {column.header.text}
                </CustomLink>
              )}
              {column.items.map((subItem) => {
                return subItem.type === 'direct' ? (
                  <NavigationLink item={subItem} key={subItem.id} />
                ) : (
                  <div
                    key={subItem.id}
                    className="flex flex-col justify-center gap-gap-md"
                  >
                    {/* <CustomLink
                      href={subItem.header.href}
                      className="text-body-md font-bold leading-body-md"
                    >
                      {subItem.header.text}
                    </CustomLink> */}
                    <NavigationLink item={subItem.header} />
                    <div className="flex flex-col gap-gap-xl pl-general-md">
                      {subItem.subLinks.map((item) => (
                        <CustomLink
                          key={item.id}
                          href={item.href}
                          className="text-body-md font-bold leading-body-md"
                        >
                          {item.text}
                        </CustomLink>
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
