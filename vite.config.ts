import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Add bundle analyzer in analyze mode
    mode === 'analyze' && visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize build output
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
          'supabase-vendor': ['@supabase/supabase-js'],
          'query-vendor': ['@tanstack/react-query'],
        },
      },
    },
    // Enable source maps for production debugging
    sourcemap: mode === 'development',
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    port: 5173,
    host: true,
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: true,
  },
}))
