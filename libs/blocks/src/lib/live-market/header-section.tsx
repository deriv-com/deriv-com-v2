import { ReactNode } from 'react';
import { Heading } from '@deriv/quill-design';

export const HeaderSection = ({
  header,
  TabHeader,
}: {
  header?: string;

  TabHeader?: () => ReactNode;
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-gap-2xl">
      {header && <Heading.H2>{header}</Heading.H2>}
      {TabHeader && (
        <div className="flex w-full flex-col items-center gap-gap-xl">
          {TabHeader && <TabHeader />}
        </div>
      )}
    </div>
  );
};
