import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss';
import viteImagemin from 'vite-plugin-imagemin';
// import imagePresets, { widthPreset } from 'vite-plugin-image-presets';

import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    viteCompression({
      algorithm: 'brotliCompress', // Можно поменять на 'brotliCompress'
      threshold: 512, // Минимальный размер файла для сжатия (1KB)
      deleteOriginFile:false,
    }),
    WindiCSS(),
    viteImagemin({
      gifsicle: {optimizationLevel: 3},
      optipng: {optimizationLevel: 5},
      mozjpeg: {quality: 65},
      webp: {quality: 65},
      svgo: { plugins: [{ removeViewBox: false }] },
    })
  ],
  server: {
    port: 5134,
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'terser', // Быстрая минификация
    target: 'esnext', // Оптимальный таргет
    assetsInlineLimit: 4096, // Уменьшение размера бандла
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue'; // Vue в отдельный бандл
            return 'vendor'; // Остальные зависимости
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger:true
      }
    }
  },
  // server:{
  //   allowedHosts: [
  //     "c7b8-5-77-195-64.ngrok-free.app",
  //     "ec9a-5-77-195-64.ngrok-free.app"
  //   ]
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
