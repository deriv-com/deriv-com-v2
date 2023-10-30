import styles from './base.module.css';

import { Heading, qtMerge, Text } from '@deriv/quill-design';
import { AccordionProps } from '../types';
import { StandaloneChevronDownRegularIcon } from '@deriv/quill-icons';
import { useCallback, useEffect, useRef, useState } from 'react';

export const Base = ({
  className,
  title,
  subtitle,
  content: Content,
  expanded = false,
  icon,
  divider = 'both',
  customContent: CustomContent,
}: AccordionProps) => {
  const [is_expanded, setExpanded] = useState(expanded);
  const accordion_element = useRef(null);

  const toggleCollapse = () => {
    setExpanded((current) => !current);
  };

  // Handle Collapse via Keyboard
  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13) {
      if (accordion_element.current === document.activeElement) {
        toggleCollapse();
      }
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
      ref={accordion_element}
      tabIndex={0}
      className={qtMerge(
        'flex w-full max-w-[800px] flex-col',
        'hover:bg-opacity-black-100',
        'focus-visible:outline-1 focus-visible:outline-opacity-red-100',
        divider === 'bottom' && 'border-xs border-b-opacity-black-600',
        divider === 'both' &&
          'border-xs border-b-opacity-black-600 border-t-opacity-black-600',
        className,
      )}
      onClick={() => toggleCollapse()}
    >
      <div className="flex items-center justify-between gap-general-lg p-general-lg">
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
            is_expanded && styles['accordion-button-expanded'],
          )}
        >
          <StandaloneChevronDownRegularIcon fill="black" iconSize="sm" />
        </div>
      </div>
      <div
        className={qtMerge(
          styles['accordion-content'],
          is_expanded && styles['accordion-content-expanded'],
        )}
      >
        <div className="flex h-fit p-general-lg">{<Content />}</div>
      </div>
    </div>
  );
};

export default Base;
