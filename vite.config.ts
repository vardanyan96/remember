import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server:{
    allowedHosts: [
      "c7b8-5-77-195-64.ngrok-free.app",
      "ec9a-5-77-195-64.ngrok-free.app"
    ]
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync('./ssl/key.pem'),
  //     cert: fs.readFileSync('./ssl/cert.pem'),
  //   },
  //   host: 'localhost', // или другой хост
  //   port: 5173, // можно изменить порт
  // },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
