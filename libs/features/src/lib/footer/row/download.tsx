import { OptimizedImage } from '@deriv-com/components';
import {
  LabelPairedAppleMdIcon,
  LabelPairedGooglePlayMdIcon,
  LabelPairedHuaweiAppGalleryMdIcon,
} from '@deriv/quill-icons/LabelPaired';
import clsx from 'clsx';

const sharedClasses =
  'flex items-center justify-center gap-gap-md p-general-sm rounded-sm border-solid border-xs border-opacity-black-100';

const DownloadBadges = () => {
  return (
    <div className="flex flex-col gap-gap-md max-lg:flex-1">
      <div className={clsx(sharedClasses)}>
        <LabelPairedGooglePlayMdIcon />
        <OptimizedImage
          imageName="footer/get-googleplay.png"
          alt="get it on google play"
          width={90}
          height={28}
        />
      </div>
      <div className={clsx(sharedClasses)}>
        <LabelPairedAppleMdIcon />
        <OptimizedImage
          imageName="footer/download-appstore.png"
          alt="download on the app store"
          width={90}
          height={28}
        />
      </div>
      <div className={clsx(sharedClasses)}>
        <LabelPairedHuaweiAppGalleryMdIcon />
        <OptimizedImage
          imageName="footer/explore-appgallery.png"
          alt="explore it on appgallery"
          width={90}
          height={28}
        />
      </div>
    </div>
  );
};

export default DownloadBadges;
