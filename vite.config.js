import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  publicDir: 'public',
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild', // Use esbuild for minification
    assetsInlineLimit: 0, // Prevents inlining of small assets
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        publications: resolve(__dirname, 'publications.html'),
        error: resolve(__dirname, '2025-02-05-h-of-s.html'),
      },
      output: {
        manualChunks: undefined // Keeps code in one file for simpler loading
      }
    }
  }
});
