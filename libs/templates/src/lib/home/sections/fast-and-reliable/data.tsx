import { LabelPairedCheckRegularIcon } from '@deriv/quill-icons';
import { Text } from '@deriv/quill-design';

export const FastAndReliableContent = () => {
  return (
    <ul className="flex flex-col gap-gap-xl">
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">
          Average execution speeds of under <strong>50ms</strong>
        </Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">
          <strong>USD 20+ billion</strong> in daily trades from over 90,000+
          daily clients
        </Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">
          <strong>99.97% uptime</strong> with intelligent routing to servers in
          London, Frankfurt, Cape Town, and Singapore for performance and
          reliability
        </Text>
      </li>
      <li className="flex gap-gap-lg">
        <LabelPairedCheckRegularIcon
          className="min-w-[18px]"
          width={18}
          height={30}
        />
        <Text size="lg">
          Diverse and proprietary mix of liquidity providers for
          <strong> optimal pricing </strong>
          and <strong> swift execution</strong> whenever you trade
        </Text>
      </li>
    </ul>
  );
};
