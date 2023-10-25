import { Text } from '@deriv/quill-design';
import { ColContent } from '../types';

interface ListContentProps {
  colData: ColContent;
}
export const ListContent = ({ colData }: ListContentProps) => {
  return (
    <div>
      {colData.items.map((item) =>
        typeof item === 'string' ? (
          <Text key={item} className="py-general-sm text-opacity-black-600">
            {item}
          </Text>
        ) : (
          <div
            key={item.text}
            className="flex flex-col gap-gap-md py-general-sm"
          >
            <div className="flex flex-row gap-gap-md">
              {item.listIcon}
              <Text className="text-opacity-black-600">{item.text}</Text>
            </div>
            <div className="flex flex-col gap-gap-md px-general-xl">
              {item.lists.map((list) => (
                <div key={list} className="flex flex-row">
                  {item.icon}{' '}
                  <Text className="text-opacity-black-400">{list}</Text>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
};
