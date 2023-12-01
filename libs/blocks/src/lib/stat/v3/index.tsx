import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtJoin,
  qtMerge,
} from '@deriv/quill-design';

export type V3Item = {
  title: string;
  description: string;
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
      className={qtJoin(
        'bg-background-primary-container py-general-xl',
        className,
      )}
    >
      <FluidContainer
        className={
          'grid grid-cols-2 grid-rows-2 items-center justify-center gap-x-gap-lg gap-y-gap-2xl md:grid-cols-4 md:grid-rows-1 lg:gap-gap-xl'
        }
      >
        {items.map((item) => {
          return (
            <div className="flex h-full flex-col gap-400">
              <Heading.H3 className="min-h-[24px] text-center">
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
