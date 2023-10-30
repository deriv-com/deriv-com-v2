import styles from './search.module.css';
import { qtMerge } from '@deriv/quill-design';
import { StandaloneSearchRegularIcon } from '@deriv/quill-icons';
import { useEffect, useState } from 'react';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange: (e: string, i?: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
};

export const SearchChip = ({
  placeholder,
  value = '',
  onChange,
  className,
  inputClassName,
}: InputProps) => {
  const [current_value, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div
      className={qtMerge(
        'flex justify-start gap-general-sm rounded-lg border-75',
        'border-solid-slate-100 bg-background-primary-container',
        'p-general-md',
        className,
      )}
    >
      <StandaloneSearchRegularIcon fill="black" iconSize="sm" />

      <input
        className={qtMerge(
          'w-full text-75 outline-none',
          'text-solid-slate-1400',
          inputClassName,
          styles['bg-transparent'],
        )}
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
