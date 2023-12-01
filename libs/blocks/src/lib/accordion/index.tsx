/* eslint-disable-next-line */
import {
  Accordion,
  AccordionProps,
  AccordionVariants,
} from '@deriv-com/components';
import {
  Chip,
  FluidContainer,
  Heading,
  qtJoin,
  qtMerge,
} from '@deriv/quill-design';
import { useState } from 'react';
import styles from './styles.module.scss';

export interface AccordionBlockProps {
  title?: string;
  tab?: {
    align?: 'center' | 'end';
    data: { id: number; title: string }[];
  };
  className?: string;
  variant?: keyof AccordionVariants;
  content: {
    className?: string;
    data: AccordionProps[][];
  };
  multiCollapse?: boolean;
}

//todo: removed [slugify] from utils/../utils and added here. we need to update this because we are using this on multiple places

export const slugify = (input: string): string =>
  input
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .trim();

export function AccordionBlock({
  title,
  tab,
  content,
  className,
  variant = 'Flush',
  multiCollapse = false,
}: AccordionBlockProps) {
  const [expanded, setExpanded] = useState('');
  const [selectedChip, setSelectedChip] = useState(0);

  const handleExpand = (isExpanded: boolean, id: string) => {
    if (!multiCollapse) {
      if (isExpanded) {
        setExpanded(id);
      }
    }
  };

  const handleChip = (id: number) => {
    if (selectedChip !== id) {
      setSelectedChip(id);
      setExpanded('');
    }
  };

  const chipAlignment = {
    center: 'mx-auto',
    end: 'ml-auto',
  };

  const DynamicAccordion = Accordion[variant];

  return (
    <FluidContainer
      className={qtMerge(
        'flex w-full max-w-[1024px] flex-col items-center justify-center gap-1600 py-general-xl',
        className,
      )}
    >
      {title && <Heading.H2 className="text-center">{title}</Heading.H2>}

      {tab && tab.data.length > 0 && (
        <div
          className={qtJoin(
            'flex gap-gap-md overflow-x-scroll max-w-full',
            styles['scrollbar_hide'],
            tab.align ? chipAlignment[tab.align] : 'mr-auto',
          )}
        >
          {tab.data.map((item) => (
            <Chip.Selectable
              key={item.id}
              selected={selectedChip === item.id}
              onChipSelect={() => handleChip(item.id)}
              className="whitespace-nowrap"
            >
              {item.title}
            </Chip.Selectable>
          ))}
        </div>
      )}

      <div className="flex w-full flex-col gap-general-lg">
        <div className={content?.className}>
          {content &&
            content.data[selectedChip].map((accData) => {
              const { title: accTitle } = accData;
              const id = slugify(accTitle as string);

              return (
                <DynamicAccordion
                  {...accData}
                  id={id}
                  key={accTitle}
                  expanded={multiCollapse ? false : expanded === accTitle}
                  onExpand={(isExpanded, id) => handleExpand(isExpanded, id)}
                />
              );
            })}
        </div>
      </div>
    </FluidContainer>
  );
}

export default AccordionBlock;
