import { Heading, qtMerge } from '@deriv/quill-design';
import { ReactNode } from 'react';

export type BottomSheetProps = {
  heading: string;
  icon: ReactNode;
  children?: ReactNode;
};

export const BottomSheet = ({ heading, icon, children }: BottomSheetProps) => {
  return (
    <div
      className={qtMerge(
        'fixed inset-y-gap-xs left-50 z-10 flex h-full w-full flex-col justify-end bg-typography-default ',
      )}
    >
      <div
        className={qtMerge(
          'fixed w-full rounded-t-2xl bg-solid-slate-50 p-general-sm',
        )}
      >
        <div className="flex flex-row items-center justify-between p-general-md">
          {heading && <Heading.H6>{heading}</Heading.H6>}
          {icon && icon}
        </div>
        {children}
      </div>
      <div></div>
    </div>
  );
};

export default BottomSheet;
