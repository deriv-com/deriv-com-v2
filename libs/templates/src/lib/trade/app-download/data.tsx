import { OptimizedImage } from '@deriv-com/components';
import {
  StandaloneGlobeRegularIcon,
  StandaloneIosIcon,
  StandaloneLinuxIcon,
  StandaloneHuaweiAppGalleryIcon,
  StandaloneGooglePlayIcon,
  StandaloneAppStoreIosIcon,
} from '@deriv/quill-icons/Standalone';
import { LabelPairedWindowsMdIcon } from '@deriv/quill-icons/LabelPaired';

export const data = {
  content: (
    <OptimizedImage
      imageName="trade/features/hk_trade_feature_mt5.png"
      width={608}
      height={536}
      alt="MT5 App"
    />
  ),
  heading: 'Get trading with Deriv MT5',
  description:
    'Take advantage of built-in market analysis tools, one-click trading, and expert advisors on this popular CFD platform.',
  cta: {
    qr: (
      <OptimizedImage
        imageName="trade/features/hk_trade_feature_qr_mt5.png"
        width={88}
        height={88}
        alt="home hero"
        className="lg:w-3200"
      />
    ),
    description: 'Scan to download',
    devices: 'Android, Apple & Huawei',
  },
  platforms: [
    {
      icon: <StandaloneGlobeRegularIcon />,
      name: 'Web browser',
    },
    {
      icon: <LabelPairedWindowsMdIcon />,
      name: 'Windows',
    },
    {
      icon: <StandaloneIosIcon />,
      name: 'iOS',
    },
    {
      icon: <StandaloneLinuxIcon />,
      name: 'Linux',
    },
    {
      icon: <StandaloneHuaweiAppGalleryIcon />,
      name: 'AppGallery',
    },
    {
      icon: <StandaloneGooglePlayIcon />,
      name: 'Play Store',
    },
    {
      icon: <StandaloneAppStoreIosIcon />,
      name: 'App Store',
    },
  ],
};
