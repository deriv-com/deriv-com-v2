/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/components',

  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      // skipDiagnostics: true,
    }),
    react(),
    nxViteTsPaths(),
  ],

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.bundle.ts',
      name: 'components',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwind-merge',
        '@deriv/quill-design',
        '@deriv/quill-icons',
        '@deriv/quill-icons',
        '@deriv/quill-icons/LabelPaired',
        '@deriv/quill-icons/Standalone',
        '@deriv/quill-icons/Flags',
        '@deriv/quill-icons/Logo',
        '@deriv/quill-icons/Illustrative',
        '@deriv/quill-icons/Markets',
        '@deriv/quill-icons/Social',
        '@deriv/quill-icons/Currencies',
        '@deriv/quill-icons/Illustration',
        '@deriv-com/providers',
        '@deriv-com/hooks',
        'swiper',
      ],
    },
    minify: true,
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
