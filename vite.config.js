import { defineConfig } from 'vite';

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
      output: {
        manualChunks: undefined // Keeps code in one file for simpler loading
      }
    }
  }
});
