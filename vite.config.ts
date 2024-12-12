import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@/theme': '/src/theme',
      '@/pages': '/src/pages',
      '@/icons': '/src/assets/icons',
      '@/images': '/src/assets/images',
      '@/components': '/src/components',
      '@/layouts': '/src/layouts',
      '@/services': '/src/services',
      '@/types': '/src/types',
      '@/utils': '/src/utils',
      '@/styles': '/src/styles',
      '@/store': '/src/store',
      '@': '/src', // important to be last
    },
  },
});
