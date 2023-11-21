import { OptimizedImage } from '@deriv-com/components';
import { CaptionText, Heading, Text } from '@deriv/quill-design';
import { DerivProductDerivGoBrandLightLogoHorizontalIcon } from '@deriv/quill-icons/Logo';

export const DerivGoBanner = () => {
  return (
    <div className="flex flex-col gap-gap-lg rounded-lg border-xs border-opacity-black-100 p-general-md">
      <div className="flex flex-col gap-gap-md">
        <div className="flex items-center gap-gap-md">
          <DerivProductDerivGoBrandLightLogoHorizontalIcon
            width={24}
            height={24}
          />
          <Heading.H6>Deriv GO</Heading.H6>
        </div>
        <Text size="sm" className="text-typography-default">
          Trade multipliers on our mobile app.
        </Text>
      </div>
      <div className="flex items-center gap-gap-md rounded-lg border-[0.5px] border-opacity-black-200 p-general-sm">
        <OptimizedImage
          imageName="footer/deriv-go-qr.png"
          width={64}
          height={64}
          alt="download deriv-go"
        />
        <CaptionText className="text-typography-default">
          Scan to download
        </CaptionText>
      </div>
      <OptimizedImage
        imageName="footer/download-buttons.png"
        width={160}
        height={232}
        alt="download buttons"
      />
    </div>
  );
};
