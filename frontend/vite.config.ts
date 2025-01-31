import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import yaml from '@rollup/plugin-yaml'

// https://vite.dev/config/
export default defineConfig({
  //base: '/ai-native-dev-landscape/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    yaml({
      include: 'src/**/*.{yml,yaml}'
    }),
  ],
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'] // https://pglite.dev/docs/bundler-support
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
