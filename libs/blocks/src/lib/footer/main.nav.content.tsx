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
      <h2 className="sr-only">Footer Navigation</h2>
      {items.map((item) => (
        <div className="flex flex-col gap-gap-xl" key={item.id}>
          {item.layers.map((layer) =>
            layer.type === 'link' ? (
              <div
                className="flex w-full flex-col gap-gap-lg"
                role="region"
                aria-labelledby={`heading-${layer.id}`}
                key={layer.id}
              >
                <Heading.H6 id={`heading-${layer.id}`}>
                  {layer.header}
                </Heading.H6>
                {layer.items.map(({ id, href, target, text, ...rest }) => (
                  <div
                    className="flex flex-col items-start gap-gap-lg"
                    key={id}
                  >
                    <CustomLink
                      size="sm"
                      href={href}
                      className="text-typography-prominent"
                      target={target}
                      {...rest}
                    >
                      {text}
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
