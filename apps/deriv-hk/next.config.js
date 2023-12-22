// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    loader: 'custom',
    imageSizes: [10, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: [
    'next-image-export-optimizer',
    '@deriv/quill-design',
    '@deriv/quill-icons',
    '@deriv/quill-icons/LabelPaired',
    '@deriv/quill-icons/Standalone',
    '@deriv/quill-icons/Flags',
    '@deriv/quill-icons/Logo',
    '@deriv/quill-icons/Illustrative',
    '@deriv/quill-icons/Markets',
    '@deriv/quill-icons/Social',
  ],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'assets/public',
    nextImageExportOptimizer_exportFolderPath: 'apps/deriv-hk/public/images',
    nextImageExportOptimizer_exportFolderName: 'optimized-images',
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_generateAndUseBlurImages: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withBundleAnalyzer,
];

module.exports = composePlugins(...plugins)(nextConfig);
