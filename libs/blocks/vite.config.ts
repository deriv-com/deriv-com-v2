/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/blocks',

  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
      // insertTypesEntry: true,
    }),
    react(),
    nxViteTsPaths(),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'blocks',
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
        '@deriv-com/providers',
        '@deriv-com/hooks',
        '@deriv/quill-icons/LabelPaired',
        '@deriv/quill-icons/Standalone',
        '@deriv/quill-icons/Flags',
        '@deriv/quill-icons/Logo',
        '@deriv/quill-icons/Illustrative',
        '@deriv/quill-icons/Markets',
        '@deriv/quill-icons/Social',
        '@deriv/quill-icons/Currencies',
        '@deriv-com/components',
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
