import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import postcss from 'postcss'

// https://vite.dev/config/
export default defineConfig({
  //   server: {
  //   proxy: {
  //     '/api': 'http://localhost:3000'
  //   }
  // },
  plugins: [react(),
    tailwindcss(),
    tailwindcss/postcss(),
  ],
   build: {
    // activa minificación y hashing
    manifest: true,
    rollupOptions: {
      output: {
        // nombres con hash para JS/CSS
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  base: "/app-news/"
})
