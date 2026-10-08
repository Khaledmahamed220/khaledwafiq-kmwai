import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
// Vercel / local dev: served from the domain root  -> base '/'
// GitHub Pages (built by GitHub Actions): served from /KMW-AI1-/ -> base '/KMW-AI1-/'
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/KMW-AI1-/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true
  }
})
