import styles from './base.module.css';

import { qtMerge, Text } from '@deriv/quill-design';
import { AccordionProps } from '../types';
import { StandaloneChevronDownRegularIcon } from '@deriv/quill-icons/Standalone';
import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export const Base = ({
  id,
  className,
  title,
  subtitle,
  content: Content,
  expanded = false,
  icon,
  divider = 'none',
  background = 'light',
  customContent: CustomContent,
  contentClass,
  onExpand,
}: AccordionProps) => {
  const [isExpanded, setExpanded] = useState(expanded);
  const [isAutoExpand, setAutoExpand] = useState(false);

  const accordionElement = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setExpanded((current) => !current);
    setAutoExpand(false);
    scrollToExpanded(500);

    if (onExpand) {
      onExpand(!isExpanded, title);
    }
  };

  const bgColorVariantClass = {
    light: 'bg-background-primary-container',
    gray: 'bg-opacity-black-75',
  };

  const dividerClassNames = {
    both: 'border-x-none border-b-opacity-black-100 border-t-opacity-black-100 border-100',
    bottom: 'border-b-opacity-black-100 !border-t-none border-100',
    none: '!border-t-none',
  };

  // Handle Collapse via Keyboard
  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13) {
      if (accordionElement.current === document.activeElement) {
        toggleCollapse();
      }
    }
  }, []);

  // Scroll to expanded item
  const scrollToExpanded = (delay = 1000) => {
    const accElement = accordionElement.current;

    if (accElement) {
      setTimeout(() => {
        accElement.scrollIntoView({
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
      ref={accordionElement}
      tabIndex={0}
      className={qtMerge(
        'flex w-full flex-col overflow-hidden',
        'focus-visible:outline-1 focus-visible:outline-opacity-red-100',
        dividerClassNames[divider],
        'border-100 border-b-opacity-black-100 border-t-opacity-black-100',
        className,
      )}
    >
      <div
        className={qtMerge(
          'flex cursor-pointer items-center justify-between',
          isExpanded && 'bg-opacity-black-75',
          'gap-general-lg p-general-lg',
          'border-opacity-black-100',
          contentClass,
        )}
        onClick={() => toggleCollapse()}
      >
        {CustomContent ? (
          <CustomContent />
        ) : (
          <>
            {icon && <div className="flex">{icon}</div>}
            <div className="flex w-full flex-col gap-general-xs">
              <Text className="overflow-hidden text-typography-prominent">
                {title}
              </Text>
              {subtitle && (
                <Text
                  size="sm"
                  className="overflow-hidden text-typography-subtle"
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
            (isAutoExpand || isExpanded) && styles['accordion-button-expanded'],
          )}
        >
          <StandaloneChevronDownRegularIcon fill="black" iconSize="sm" />
        </div>
      </div>
      <div
        className={qtMerge(
          styles['accordion-content'],
          (isAutoExpand || isExpanded) && styles['accordion-content-expanded'],
        )}
      >
        {(isAutoExpand || isExpanded) && (
          <div
            className={clsx(
              'flex h-fit p-general-lg',
              bgColorVariantClass[background],
            )}
          >
            {Content && <Content />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Base;
