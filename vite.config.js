import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/grocery-web-app/',   // ⭐ THIS IS REQUIRED
  plugins: [react()],
})
