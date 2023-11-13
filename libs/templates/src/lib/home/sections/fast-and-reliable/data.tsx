import { LabelPairedCheckRegularIcon } from '@deriv/quill-icons/LabelPaired';
import { Text } from '@deriv/quill-design';

export const FastAndReliableContent = () => {
  return (
    <ul className="flex flex-col gap-gap-lg lg:gap-gap-xl">
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">Average trade execution: Below 50ms</Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">Daily trades: Over 20 billion USD</Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">Uptime: 99.97%</Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">
          Intelligent server routing — better performance and reliability
        </Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">
          Optimal pricing and fast execution thanks to proprietary liquidity
          providers
        </Text>
      </li>
    </ul>
  );
};
