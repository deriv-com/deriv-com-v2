import { LiveMarket, Tab } from '@deriv-com/components';
import { LiveMarketTabType } from '../types';

export const LiveMarketTab = ({
  header,
  description,
  disclaimer,
  link,
  tabs,
  children,
  className,
  tabId,
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
      <Tab.Base tabs={tabs} tabId={tabId} className="flex flex-col gap-gap-2xl">
        {children}
      </Tab.Base>
    </LiveMarket.Container>
  );
};

export default LiveMarketTab;
