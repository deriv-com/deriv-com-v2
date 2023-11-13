import styles from './search.module.css';
import { qtMerge } from '@deriv/quill-design';
import { StandaloneSearchRegularIcon } from '@deriv/quill-icons/Standalone';
import { useEffect, useRef, useState } from 'react';

export type sizeVariant = 'sm' | 'md';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange: (e: string, i?: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  size?: sizeVariant;
};

const sizeVariantClass: { [key in sizeVariant]: string } = {
  sm: 'px-general-sm py-general-xs',
  md: 'p-general-md',
};

export const SearchChip = ({
  placeholder,
  value = '',
  size = 'md',
  onChange,
  className,
  inputClassName,
}: InputProps) => {
  const [currentValue, setValue] = useState(value);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div
      className={qtMerge(
        'relative flex justify-start gap-general-sm rounded-lg border-75',
        'border-solid-slate-100 bg-background-primary-container',
        sizeVariantClass[size],
        className,
      )}
    >
      <StandaloneSearchRegularIcon fill="black" iconSize="sm" />

      <input
        className={qtMerge(
          'w-full outline-none',
          'text-solid-slate-1400',
          inputClassName,

          styles['bg-transparent'],
        )}
        ref={searchInputRef}
        placeholder={placeholder}
        value={currentValue}
        onChange={(e) => {
          const inputValue = e.target.value;
          setValue(inputValue);
          onChange(inputValue, e);
        }}
      />
    </div>
  );
};

export default SearchChip;
