import { Button, qtMerge } from '@deriv/quill-design';
import {
  StandaloneChevronLeftRegularIcon,
  StandaloneChevronRightRegularIcon,
} from '@deriv/quill-icons';

const Pagination = ({ table }) => {
  return (
    <div className={qtMerge('flex flex-col', 'p-1200', 'gap-1200')}>
      <div className={qtMerge('flex justify-center', 'gap-400')}>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={qtMerge('bg-opacity-white-100')}
        >
          <StandaloneChevronLeftRegularIcon fill="black" iconSize="sm" />
        </Button>
        {table.getPageOptions().map((page) => (
          <Button
            selected={page === table.getState().pagination.pageIndex}
            key={page}
            onClick={() => table.setPageIndex(page)}
            className={qtMerge('bg-opacity-black-600', 'p-800')}
          >
            {page + 1}
          </Button>
        ))}
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={qtMerge('bg-opacity-white-100')}
        >
          <StandaloneChevronRightRegularIcon fill="black" iconSize="sm" />
        </Button>
      </div>
      <div className={qtMerge('flex justify-center')}>
        <Button>Trade now</Button>
      </div>
    </div>
  );
};

export default Pagination;
