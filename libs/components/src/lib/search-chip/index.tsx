import styles from './search.module.css';
import { qtMerge } from '@deriv/quill-design';
import { StandaloneSearchRegularIcon } from '@deriv/quill-icons';
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
  const [current_value, setValue] = useState(value);
  const search_input_ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (search_input_ref.current) {
      search_input_ref.current.focus();
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
        ref={search_input_ref}
        placeholder={placeholder}
        value={current_value}
        onChange={(e) => {
          const input_value = e.target.value;
          setValue(input_value);
          onChange(input_value, e);
        }}
      />
    </div>
  );
};

export default SearchChip;
