import { qtMerge } from '@deriv/quill-design';
import { StandaloneSearchRegularIcon } from '@deriv/quill-icons';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeInput: any;
};

export const SearchChip = ({
  placeholder,
  value = '',
  onChangeInput,
}: InputProps) => {
  return (
    <div
      className={qtMerge(
        'flex justify-start gap-general-sm rounded-400 border-75 border-solid-slate-100 bg-background-primary-container p-200 ps-200',
      )}
    >
      <StandaloneSearchRegularIcon fill="black" iconSize="sm" />

      <input
        className={qtMerge('w-[100%] text-75 outline-none')}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default SearchChip;
