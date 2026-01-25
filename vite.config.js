import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For a custom domain or root-level deployment
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
