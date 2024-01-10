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
  ...rest
}: LiveMarketTabType) => {
  return (
    <LiveMarket.Container
      header={header}
      description={description}
      disclaimer={disclaimer}
      link={link}
      className={className}
      {...rest}
    >
      <Tab.Base tabs={tabs} className="flex flex-col gap-gap-2xl">
        {children}
      </Tab.Base>
    </LiveMarket.Container>
  );
};

export default LiveMarketTab;
