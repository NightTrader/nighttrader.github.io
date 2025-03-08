import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({ include: "**/*.svg" })
  ],
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
    extensions: ['.tsx', '.ts'],
  },
})
