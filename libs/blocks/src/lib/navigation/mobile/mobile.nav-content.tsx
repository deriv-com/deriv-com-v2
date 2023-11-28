import { useNavigation } from '@deriv-com/hooks';
import MobileNavLink from './mobile.nav-link';
import { Text } from '@deriv/quill-design';
import clsx from 'clsx';

export const MobileNavContent = () => {
  const { activeItem } = useNavigation();
  return (
    <div className="flex w-full flex-col gap-gap-lg overflow-y-auto overscroll-y-contain">
      {activeItem && activeItem.type === 'nav-dropdown' ? (
        <>
          {activeItem.columns.map((column) => (
            <div
              key={column.id}
              className={clsx(
                'flex flex-col justify-between gap-gap-sm ',
                (column.header?.text === null || !column.header) &&
                  '[&:not(:first-child)]:-mt-general-md',
              )}
            >
              {column.header &&
                (column.header.type === 'text' ? (
                  column.header.text === null ? null : (
                    <Text size="sm" className="py-general-xs">
                      {column.header.text}
                    </Text>
                  )
                ) : (
                  <MobileNavLink
                    item={column.header}
                    className="font-regular text-typography-subtle underline"
                  />
                ))}
              <div>
                {column.items.map((subItem) => {
                  return subItem.type === 'direct' ? (
                    !subItem.isDesktopNavOnly && (
                      <MobileNavLink item={subItem} key={subItem.id} />
                    )
                  ) : (
                    <div
                      key={subItem.id}
                      className="flex flex-col justify-center gap-gap-md"
                    >
                      <MobileNavLink item={subItem.header} />
                      <div className="flex flex-col gap-gap-xl pl-general-md">
                        {subItem.subLinks.map((item) => (
                          <MobileNavLink item={item} key={item.id} />
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

export default MobileNavContent;
