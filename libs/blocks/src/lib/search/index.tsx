import { SearchChip } from '@deriv-com/components';
import { ReactNode } from 'react';

export type SearchBlockProps = {
  showSearchresults: (e: string) => void;
  content: ReactNode;
};

export const SearchBlock = ({
  showSearchresults,
  content,
}: SearchBlockProps) => {
  return (
    <section className="flex w-full max-w-[1024px] flex-col gap-general-xl py-general-xl ">
      <SearchChip
        placeholder='Try "Trade"'
        onChange={(value) => showSearchresults(value)}
        className="w-full "
        inputClassName="!bg-gradient-slate-110"
      />
      {content && content}
    </section>
  );
};

export default SearchBlock;
