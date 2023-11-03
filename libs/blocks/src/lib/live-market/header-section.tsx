import { ReactNode } from 'react';
import { Heading, Text } from '@deriv/quill-design';

export const HeaderSection = ({
  header,
  description,
  TabHeader,
}: {
  header?: string;
  description?: string;
  TabHeader?: () => ReactNode;
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-gap-2xl">
      {header && <Heading.H2>{header}</Heading.H2>}
      {(description || TabHeader) && (
        <div className="flex w-full flex-col items-center gap-gap-xl">
          {TabHeader && <TabHeader />}
          {description && (
            <Text className="text-center" size="md">
              {description}
            </Text>
          )}
        </div>
      )}
    </div>
  );
};
