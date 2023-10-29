import { OptimizedImage } from '@deriv-com/components';
import {
  StandaloneGlobeRegularIcon,
  LabelPairedWindowsIcon,
  StandaloneIosIcon,
  StandaloneLinuxIcon,
  StandaloneHuaweiAppGalleryIcon,
  StandaloneGooglePlayIcon,
  StandaloneAppStoreIosIcon,
} from '@deriv/quill-icons';

export const data = {
  content: (
    <div className="flex">
      <OptimizedImage
        className="hidden items-stretch lg:block"
        imageName="trade/features/hk_trade_feature_desktop_mt5.png"
        width={608}
        height={536}
        alt="MT5 App"
      />
      <OptimizedImage
        className="block items-stretch lg:hidden"
        imageName="trade/features/hk_trade_feature_mobile_mt5.png"
        width={809}
        height={460}
        alt="MT5 App"
      />
    </div>
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
      icon: <LabelPairedWindowsIcon />,
      name: 'Windows',
    },
    {
      icon: <StandaloneIosIcon />,
      name: 'IOS',
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
