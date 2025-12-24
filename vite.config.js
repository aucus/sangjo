import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  // 어떤 하위 경로(/repo/)에서도 동작하도록 상대 경로로 출력
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        counseling: resolve(__dirname, 'counseling.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        support: resolve(__dirname, 'support.html'),
      },
    },
  },
})


