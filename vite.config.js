import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      global: "global/window",
      process: "process/browser",
    },
  },
  server: {
    host: true,
     // or '0.0.0.0'
     allowedHosts: [
     "171f747f14a1.ngrok-free.app"]
  },
})
