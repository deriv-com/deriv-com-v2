// eslint-disable-next-line @nx/enforce-module-boundaries
import { Tab } from '@deriv-com/components';
import { ComponentProps } from 'react';
import { LiveMarketBlock } from '../base';

export type LiveMarketTabType = ComponentProps<typeof LiveMarketBlock> &
  ComponentProps<typeof Tab.Base>;

export const LiveMarketTab = ({
  header,
  description,
  disclaimer,
  link,
  tabs,
  children,
  className,
}: LiveMarketTabType) => {
  return (
    <LiveMarketBlock
      header={header}
      description={description}
      disclaimer={disclaimer}
      link={link}
      className={className}
    >
      <Tab.Base tabs={tabs} className="flex flex-col gap-gap-2xl">
        {children}
      </Tab.Base>
    </LiveMarketBlock>
  );
};

export default LiveMarketTab;
