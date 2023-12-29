import { ReactNode } from 'react';
import { FluidContainer, Text, qtMerge } from '@deriv/quill-design';
import clsx from 'clsx';
import BlockWrapper from '../../block-wrapper';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { CustomLink } from '@deriv-com/components';

export interface LiveMarket {
  header?: ReactNode;
  description?: ReactNode;
  className?: string;
  disclaimer?: ReactNode;
  link?: {
    href: string;
    content: ReactNode;
  };
  children: ReactNode;
}

export const LiveMarketBlock = ({
  header,
  description,
  disclaimer,
  link,
  children,
}: LiveMarket) => {
  return (
    <BlockWrapper title={header} background={'gray'}>
      <FluidContainer
        className={qtMerge(
          'flex flex-col gap-gap-3xl',
          header && 'pt-general-2xl',
        )}
      >
        {children}

        {description && <Text className="text-center">{description}</Text>}
        {link && (
          <CustomLink
            size="md"
            href={link.href}
            className={clsx('flex items-center justify-center text-body-lg')}
            hasIcon
          >
            {link.content}
          </CustomLink>
        )}
        {disclaimer && (
          <div className="mx-auto max-w-[816px] max-sm:px-general-md">
            <Text size="sm" className="text-center text-typography-subtle">
              {disclaimer}
            </Text>
          </div>
        )}
      </FluidContainer>
    </BlockWrapper>
  );
};

export default LiveMarketBlock;
