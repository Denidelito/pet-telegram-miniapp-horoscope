import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  base: './',
  build: {
    outDir: resolve(__dirname, 'docs'),
    emptyOutDir: true,
  },
  publicDir: resolve(__dirname, 'src/assets/'),
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons/')],
      symbolId: 'icon-[name]',
    }),
    vue(),
  ],
  server: {
    historyApiFallback: true,
  },
});
