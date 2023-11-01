import { Heading, Text } from '@deriv/quill-design';
import { FooterItems } from './types';
import { CustomLink } from '@deriv-com/components';
import React from 'react';

export interface MainNavContentProps {
  items: FooterItems[];
}

export const MainNavContent = ({ items }: MainNavContentProps) => {
  return (
    <div className="grid grid-cols-4 gap-gap-lg">
      {items.map((item) => (
        <div className="flex flex-col gap-gap-xl" key={item.id}>
          {item.layers.map((layer) =>
            layer.type === 'link' ? (
              <div className="flex w-full flex-col gap-gap-lg" key={layer.id}>
                <Heading.H7>{layer.header}</Heading.H7>
                {layer.items.map((link) => (
                  <div
                    className="flex flex-col items-start gap-gap-lg"
                    key={link.id}
                  >
                    <CustomLink href={link.href}>
                      <Text size="sm">{link.text}</Text>
                    </CustomLink>
                  </div>
                ))}
              </div>
            ) : (
              <React.Fragment key={layer.id}>{layer.node}</React.Fragment>
            ),
          )}
        </div>
      ))}
    </div>
  );
};
