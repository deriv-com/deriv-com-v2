/* eslint-disable-next-line */

import { Accordion, AccordionProps } from '@deriv-com/components';
import { slugify } from '@deriv-com/utils';
import { FluidContainer, Heading, qtMerge } from '@deriv/quill-design';
import { useState } from 'react';

export interface AccordionBlockProps {
  title?: string;
  tab?: string;
  className?: string;
  content: {
    className?: string;
    data: AccordionProps[];
  };
  multiCollapse?: boolean;
}

export function AccordionBlock({
  title,
  tab,
  content,
  className,
  multiCollapse = false,
}: AccordionBlockProps) {
  const [expanded, setExpanded] = useState('');

  const handleExpand = (is_expanded: boolean, id: string) => {
    if (!multiCollapse) {
      if (is_expanded) {
        setExpanded(id);
      }
    }
  };

  return (
    <FluidContainer
      className={qtMerge(
        'flex w-full max-w-[1024px] flex-col items-center justify-center py-general-xl',
        className,
      )}
    >
      {title && <Heading.H2>{title}</Heading.H2>}
      <div className="flex w-full flex-col gap-general-lg">
        <div className={content?.className}>
          {content.data.map((acc_data) => {
            const { title: acc_title } = acc_data;
            const id = slugify(acc_title as string);

            return (
              <Accordion.Flush
                {...acc_data}
                id={id}
                key={acc_title}
                expanded={multiCollapse ? false : expanded === acc_title}
                onExpand={(is_expanded, id) => handleExpand(is_expanded, id)}
              />
            );
          })}
        </div>
      </div>
    </FluidContainer>
  );
}

export default AccordionBlock;
