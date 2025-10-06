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
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          router: ['react-router-dom']
        },
        // Ensure consistent asset naming for IIS
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Ensure source maps are generated for debugging
    sourcemap: false,
    // Target modern browsers but ensure compatibility
    target: 'es2015'
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
