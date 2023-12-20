import {
  Children,
  ComponentProps,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { Tab, qtJoin } from '@deriv/quill-design';

type TabTrigger = Omit<ComponentProps<typeof Tab.Trigger>, 'children'> & {
  content: ReactNode;
};

export interface TabProps {
  tabs: TabTrigger[];
  className?: string;
  children: ReactNode;
}

export const TabBase = ({ tabs, children, className }: TabProps) => {
  return (
    <Tab.Container className={className}>
      <Tab.List>
        {tabs.map(({ content, className, ...rest }, i) => (
          <Tab.Trigger
            className={qtJoin('whitespace-nowrap', className)}
            {...rest}
            key={i}
          >
            {content}
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
