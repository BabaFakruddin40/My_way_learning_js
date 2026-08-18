import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Directs any requests starting with /api to your backend server
      '/api': {
        target: 'http://localhost:3000', // Change to your backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});