import { OptimizedImage } from '@deriv-com/components';
import {
  LabelPairedAppleIcon,
  LabelPairedGooglePlayIcon,
  LabelPairedHuaweiAppGalleryIcon,
} from '@deriv/quill-icons/LabelPaired';
import clsx from 'clsx';

const sharedClasses =
  'flex items-center justify-center gap-gap-md px-general-sm py-[6px] rounded-sm border-xs border-opacity-black-100';

const DownloadBadges = () => {
  return (
    <div className="flex flex-col gap-gap-md max-lg:flex-1">
      <div className={clsx(sharedClasses)}>
        <LabelPairedGooglePlayIcon iconSize="md" />
        <OptimizedImage
          imageName="footer/get-googleplay.png"
          alt="get it on google play"
          width={89}
          height={18}
        />
      </div>
      <div className={clsx(sharedClasses)}>
        <LabelPairedAppleIcon iconSize="md" />
        <OptimizedImage
          imageName="footer/download-appstore.png"
          alt="download on the app store"
          width={89}
          height={18}
        />
      </div>
      <div className={clsx(sharedClasses)}>
        <LabelPairedHuaweiAppGalleryIcon iconSize="md" />
        <OptimizedImage
          imageName="footer/explore-appgallery.png"
          alt="explore it on appgallery"
          width={89}
          height={18}
        />
      </div>
    </div>
  );
};

export default DownloadBadges;
