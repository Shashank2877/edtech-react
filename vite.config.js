import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Set base path to relative for IIS deployment
  base: './',
  
  // Performance optimizations
  build: {
    // Output directory
    outDir: 'dist',
    // Disable code splitting to prevent reference errors
    rollupOptions: {
      output: {
        // Single chunk to avoid cross-chunk variable references
        manualChunks: undefined,
        // Ensure consistent asset naming for IIS
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Use esbuild for faster builds and better compatibility
    minify: 'esbuild',
    // Enable source maps for debugging
    sourcemap: true,
    // Target modern browsers but ensure compatibility
    target: 'es2018',
    // Ensure all dependencies are bundled
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  
  // Development server optimizations
  server: {
    host: true,
    port: 5173
  },
  
  // Preview server for testing production builds
  preview: {
    host: true,
    port: 4173
  }
})
