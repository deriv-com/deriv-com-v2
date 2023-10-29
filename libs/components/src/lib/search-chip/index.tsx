import { qtMerge } from '@deriv/quill-design';
import { StandaloneSearchRegularIcon } from '@deriv/quill-icons';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const SearchChip = ({
  placeholder,
  value = '',
  onChangeInput,
  className,
}: InputProps) => {
  return (
    <div
      className={qtMerge(
        'flex min-h-[32px] items-center justify-start gap-general-sm rounded-lg border-75 border-solid-slate-100 bg-background-primary-container px-general-sm',
        className,
      )}
    >
      <StandaloneSearchRegularIcon fill="black" iconSize="sm" />

      <input
        className={qtMerge('w-full text-body-sm outline-none')}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default SearchChip;
