import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shareMe/',
  plugins: [react(), ViteAliases()]
})
