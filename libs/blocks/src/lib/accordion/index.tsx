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
  tab?: { id: number; title: string }[];
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

  const DynamicAccordion = Accordion[variant];

  return (
    <FluidContainer
      className={qtMerge(
        'flex w-full max-w-[1024px] flex-col items-center justify-center gap-1600 py-general-xl',
        className,
      )}
    >
      {title && <Heading.H2>{title}</Heading.H2>}
      <div
        className={qtJoin(
          'flex w-full flex-nowrap gap-gap-md overflow-x-scroll',
          styles['scrollbar_hide'],
        )}
      >
        {tab &&
          tab.map((tab) => (
            <Chip.Selectable
              key={tab.id}
              selected={selectedChip === tab.id}
              onChipSelect={() => handleChip(tab.id)}
              className="whitespace-nowrap"
            >
              {tab.title}
            </Chip.Selectable>
          ))}
      </div>

      <div className="flex w-full flex-col gap-general-lg">
        <div className={content?.className}>
          {content &&
            content.data[selectedChip].map((accData) => {
              const { title: accTitle, ...rest } = accData;
              const id = slugify(accTitle as string);

              return (
                <DynamicAccordion
                  {...rest}
                  id={id}
                  title={accTitle}
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
