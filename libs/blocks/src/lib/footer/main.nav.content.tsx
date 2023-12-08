import { Heading } from '@deriv/quill-design';
import { FooterItems } from './types';
import { CustomLink } from '@deriv-com/components';
import React from 'react';
import clsx from 'clsx';

export type gridCols = 'four' | 'six';
export interface MainNavContentProps {
  items: FooterItems[];
  cols?: gridCols;
}

const gridColsVariant: { [key in gridCols]: string } = {
  four: 'grid-cols-4',
  six: 'grid-cols-6',
};

export const MainNavContent = ({
  items,
  cols = 'four',
}: MainNavContentProps) => {
  return (
    <div className={clsx('grid gap-gap-lg', gridColsVariant[cols])}>
      {items.map((item) => (
        <div className="flex flex-col gap-gap-xl" key={item.id}>
          {item.layers.map((layer) =>
            layer.type === 'link' ? (
              <div className="flex w-full flex-col gap-gap-lg" key={layer.id}>
                <Heading.H6>{layer.header}</Heading.H6>
                {layer.items.map((link) => (
                  <div
                    className="flex flex-col items-start gap-gap-lg"
                    key={link.id}
                  >
                    <CustomLink
                      size="sm"
                      href={link.href}
                      className="text-typography-prominent"
                      target={link.target}
                    >
                      {link.text}
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
