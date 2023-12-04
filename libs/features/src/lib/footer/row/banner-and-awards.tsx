import { OptimizedImage } from '@deriv-com/components';
import { CaptionText, Heading, Text } from '@deriv/quill-design';
import { DerivProductDerivGoBrandLightLogoHorizontalIcon } from '@deriv/quill-icons/Logo';
import DownloadBadges from './download';

export const DerivGoBannerAndAwards = () => {
  return (
    <div className="flex flex-col gap-gap-lg">
      <div className="flex gap-gap-lg rounded-lg border-xs border-solid border-opacity-black-100 p-general-md lg:flex-col">
        <div className="flex flex-col gap-gap-md max-lg:flex-1 max-lg:justify-center">
          <div className="flex flex-col gap-gap-md">
            <div className="flex items-center gap-gap-md">
              <DerivProductDerivGoBrandLightLogoHorizontalIcon
                width={24}
                height={24}
              />
              <Heading.H5>Deriv GO</Heading.H5>
            </div>
            <Text size="sm">Trade multipliers on our mobile app.</Text>
          </div>

          <div className="flex items-center gap-gap-md rounded-md border-[0.5px] border-solid border-opacity-black-200 p-general-sm max-sm:hidden">
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
        </div>
        <DownloadBadges />
      </div>
      <div className="rounded-lg border-xs border-solid border-opacity-black-100 p-general-md">
        <OptimizedImage
          className="m-auto"
          imageName="footer/investors-in-people.png"
          alt="investors in people - gold"
          width={156}
          height={34}
        />
      </div>
    </div>
  );
};
