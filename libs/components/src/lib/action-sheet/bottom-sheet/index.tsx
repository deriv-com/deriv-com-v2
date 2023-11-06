import { Heading } from '@deriv/quill-design';
import { ReactNode } from 'react';

export type BottomSheetProps = {
  heading: string;
  icon: ReactNode;
  children?: ReactNode;
  placeholdericon?: ReactNode;
};

export const BottomSheet = ({
  heading,
  icon,
  children,
  placeholdericon,
}: BottomSheetProps) => {
  return (
    <div className="fixed inset-y-gap-xs left-50 z-10 flex h-full w-full flex-col justify-end bg-typography-default ">
      <div className="fixed w-full rounded-t-lg bg-background-primary-base ">
        <div className="flex min-h-[64px] flex-row items-center justify-between px-general-md py-general-sm">
          {placeholdericon && placeholdericon}
          {heading && <Heading.H6 className="px-400">{heading}</Heading.H6>}
          {icon && <div className="px-general-md py-general-sm">{icon}</div>}
        </div>

        {children}
      </div>
      <div></div>
    </div>
  );
};

export default BottomSheet;
