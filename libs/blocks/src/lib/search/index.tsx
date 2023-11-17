import { SearchField } from '@deriv/quill-design';
import { ReactNode } from 'react';

export type SearchBlockProps = {
  showSearchResults: (e: string) => void;
  content?: ReactNode;
  placeholder: string;
  onChange: (e: string) => void;
};

export const SearchBlock = ({
  showSearchResults,
  content,
  placeholder,
  onChange,
}: SearchBlockProps) => {
  return (
    <section className="flex w-full max-w-[1024px] flex-col py-general-xl">
      <SearchField
        placeholder={placeholder}
        onChange={(e) => {
          showSearchResults(e.target.value);

          if (onChange) {
            onChange(e.target.value);
          }
        }}
        className="w-full gap-gap-md"
      />
      {content && content}
    </section>
  );
};

export default SearchBlock;
