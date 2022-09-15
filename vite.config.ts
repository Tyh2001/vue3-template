import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: './', // 公共路径
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 使用 @ 访问 src 目录
    }
  },
  server: {
    host: '127.0.0.1',
    port: '2001' // 端口号
  }
})
