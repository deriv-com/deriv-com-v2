import { useNavigation } from '@deriv-com/hooks';
import NavigationLink from './navigation.link';
import { Text } from '@deriv/quill-design';

export const NavigationContent = () => {
  const { activeItem } = useNavigation();
  return (
    <div className="grid w-full grid-cols-4 items-start gap-gap-lg overflow-y-auto overscroll-y-contain py-general-2xl">
      {activeItem && activeItem.type === 'nav-dropdown' ? (
        <>
          {activeItem.columns.map((column) => (
            <div
              key={column.id}
              className="flex flex-col items-start justify-center gap-gap-md"
            >
              {column.header &&
                (column.header.type === 'text' ? (
                  column.header.text === null ? (
                    <div className="h-[38px] w-full"></div>
                  ) : (
                    <Text size="sm" className="w-full py-general-sm">
                      {column.header.text}
                    </Text>
                  )
                ) : (
                  <NavigationLink
                    item={column.header}
                    className="font-regular text-typography-subtle underline"
                  />
                ))}
              <div>
                {column.items.map((subItem) => {
                  return subItem.type === 'direct' ? (
                    !subItem.isMobileNavOnly && (
                      <NavigationLink item={subItem} key={subItem.id} />
                    )
                  ) : (
                    <div
                      key={subItem.id}
                      className="flex flex-col justify-center gap-gap-md"
                    >
                      <NavigationLink item={subItem.header} />
                      <div className="flex flex-col gap-gap-xl pl-general-md">
                        {subItem.subLinks.map((item) => (
                          <NavigationLink item={item} key={item.id} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};
