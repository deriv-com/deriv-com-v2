import {
  Children,
  ComponentProps,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { Tab } from '@deriv/quill-design';

export interface TabProps {
  tabs: ComponentProps<typeof Tab.Trigger>[];
  className?: string;
  children: ReactNode;
}

export const TabBase = ({ tabs, children, className }: TabProps) => {
  return (
    <Tab.Container className={className}>
      <Tab.List className="justify-center">
        {tabs.map(({ children, ...rest }, i) => (
          <Tab.Trigger {...rest} key={i}>
            {children}
          </Tab.Trigger>
        ))}
      </Tab.List>
      <Tab.Content>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return null;
          return (
            <Tab.Panel>
              {cloneElement(child, {
                ...child.props,
              })}
            </Tab.Panel>
          );
        })}
      </Tab.Content>
    </Tab.Container>
  );
};

export default TabBase;
