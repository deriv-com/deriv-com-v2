// eslint-disable-next-line @nx/enforce-module-boundaries
import { LiveMarket, Tab } from '@deriv-com/components';
import { ComponentProps } from 'react';

export type LiveMarketTabType = ComponentProps<typeof LiveMarket.Container> &
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
    <LiveMarket.Container
      header={header}
      description={description}
      disclaimer={disclaimer}
      link={link}
      className={className}
    >
      <Tab.Base tabs={tabs} className="flex flex-col py-general-2xl">
        {children}
      </Tab.Base>
    </LiveMarket.Container>
  );
};

export default LiveMarketTab;
