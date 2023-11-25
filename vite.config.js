import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from "@rollup/plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...eslint({
        include: 'src/**/*.+(js)',
      }),
      enforce: 'pre',
      apply: 'build',
    },
  ],
  resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
});

//this broke npm build we need this next to vue() for eslint
// {
//   ...eslint(),
//   enforce: 'pre',
//   apply: 'build',
// }
