import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({ cache: false })],
  server: {
    proxy: {
      '/api': {
        target: 'https://odws.hccg.gov.tw/', // Replace with your API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
