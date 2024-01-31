import { ReactNode } from 'react';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';

export type V3Item = {
  id: number;
  title: ReactNode;
  description: ReactNode;
};

export interface V3StatBlockProps {
  items: V3Item[];
  className?: string;
}

export const V3StatBlock: React.FC<V3StatBlockProps> = ({
  items,
  className,
}) => {
  return (
    <Section
      className={qtMerge(
        'bg-background-primary-container py-general-xl',
        className,
      )}
    >
      {/* This is to fix `Heading elements are not in a sequentially-descending order` */}
      <h2 className="sr-only">Stat Section</h2>
      <FluidContainer
        className={
          'grid grid-cols-2 grid-rows-2 items-center justify-center gap-x-gap-lg gap-y-gap-2xl md:grid-cols-4 md:grid-rows-1 lg:gap-gap-xl'
        }
      >
        {items.map((item) => {
          return (
            <div className="flex h-full flex-col" key={item.id}>
              <Heading.H3 className="min-h-[24px] pb-general-sm text-center">
                {item.title}
              </Heading.H3>
              <Text size="md" className="text-center">
                {item.description}
              </Text>
            </div>
          );
        })}
      </FluidContainer>
    </Section>
  );
};

export default V3StatBlock;
