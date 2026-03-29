import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This allows everyone to use: import { ... } from '@shared/schema'
      '@shared': resolve(__dirname, './shared'),
      
      // Optional: If you want to alias your friends' apps for easy importing
      '@apps': resolve(__dirname, './apps'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // This routes all /api calls to your AI Backend automatically
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Ensures that all the piled-on frontends are bundled into one site
    outDir: 'dist',
    emptyOutDir: true,
  },
});