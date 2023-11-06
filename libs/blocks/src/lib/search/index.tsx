import { SearchChip } from '@deriv-com/components';
import { ReactNode } from 'react';

export type SearchBlockProps = {
  showSearchresults: (e: string) => void;
  content?: ReactNode;
  placeholder: string;
};

export const SearchBlock = ({
  showSearchresults,
  content,
  placeholder,
}: SearchBlockProps) => {
  return (
    <section className="flex w-full max-w-[1024px] flex-col gap-general-xl py-general-xl ">
      <SearchChip
        placeholder={placeholder}
        onChange={(value) => showSearchresults(value)}
        className="w-full "
        inputClassName="!bg-gradient-slate-110"
      />
      {content && content}
    </section>
  );
};

export default SearchBlock;
