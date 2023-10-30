import styles from './base.module.css';

import { Heading, qtMerge, Text } from '@deriv/quill-design';
import { AccordionProps } from '../types';
import { StandaloneChevronDownRegularIcon } from '@deriv/quill-icons';
import { useCallback, useEffect, useRef, useState } from 'react';

export const Base = ({
  id,
  className,
  title,
  subtitle,
  content: Content,
  expanded = false,
  icon,
  divider = 'both',
  customContent: CustomContent,
  onExpand,
}: AccordionProps) => {
  const [is_expanded, setExpanded] = useState(expanded);
  const [is_auto_expand, setAutoExpand] = useState(false);

  const accordion_element = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setExpanded((current) => !current);
    setAutoExpand(false);
    scrollToExpanded(500);

    if (onExpand) {
      onExpand(!is_expanded, title);
    }
  };

  // Handle Collapse via Keyboard
  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13) {
      if (accordion_element.current === document.activeElement) {
        toggleCollapse();
      }
    }
  }, []);

  // Scroll to expanded item
  const scrollToExpanded = (delay = 1000) => {
    const acc_element = accordion_element.current;

    if (acc_element) {
      setTimeout(() => {
        acc_element.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }, delay);
    }
  };

  // Handle auto expand and auto scroll on hash targets
  useEffect(() => {
    const hashWithoutSymbol =
      typeof window !== 'undefined' && window.location.hash.slice(1);

    if (hashWithoutSymbol === id) {
      setAutoExpand(true);
      scrollToExpanded();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);

  useEffect(() => {
    setExpanded(expanded);
  }, [expanded]);

  return (
    <div
      data-id={id}
      ref={accordion_element}
      tabIndex={0}
      className={qtMerge(
        'flex w-full flex-col',
        'focus-visible:outline-1 focus-visible:outline-opacity-red-100',
        divider === 'bottom' && 'border-xs border-b-opacity-black-100',
        divider === 'both' &&
          'border-100 border-b-opacity-black-100 border-t-opacity-black-100',
        className,
      )}
    >
      <div
        className={qtMerge(
          'flex cursor-pointer items-center justify-between',
          'gap-general-lg p-general-lg',
          'hover:bg-opacity-black-100',
        )}
        onClick={() => toggleCollapse()}
      >
        {CustomContent ? (
          <CustomContent />
        ) : (
          <>
            {icon && <div className="flex">{icon}</div>}
            <div className="flex w-full flex-col gap-general-xs">
              <Heading.H6 className="overflow-hidden">{title}</Heading.H6>
              {subtitle && (
                <Text
                  size="sm"
                  className="overflow-hidden text-opacity-black-400"
                >
                  {subtitle}
                </Text>
              )}
            </div>
          </>
        )}
        <div
          className={qtMerge(
            styles['accordion-button'],
            (is_auto_expand || is_expanded) &&
              styles['accordion-button-expanded'],
          )}
        >
          <StandaloneChevronDownRegularIcon fill="black" iconSize="sm" />
        </div>
      </div>
      <div
        className={qtMerge(
          styles['accordion-content'],
          (is_auto_expand || is_expanded) &&
            styles['accordion-content-expanded'],
        )}
      >
        <div className="flex h-fit p-general-lg">{Content && <Content />}</div>
      </div>
    </div>
  );
};

export default Base;
