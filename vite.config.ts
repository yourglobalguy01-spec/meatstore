import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://skyblue-dunlin-456849.hostingersite.com',
        changeOrigin: true,
      }
    }
  }
})
