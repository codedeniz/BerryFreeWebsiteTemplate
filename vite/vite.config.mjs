import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  base: '/free', // Base URL ayarı
  define: {
    global: 'window'
  },
  resolve: {
    alias: {
      // react-select modülü için doğrudan çözümleme
      'react-select': 'react-select/dist/react-select.esm.js'
    }
  },
  build: {
    rollupOptions: {
      external: ['react-select'], // React-Select'i harici olarak kabul et
      output: {
        manualChunks: {
          // Büyük modülleri daha küçük parçalara ayırma
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Büyük dosya uyarıları için limit artırıldı
  },
  server: {
    open: true, // Sunucu başlatıldığında otomatik açılır
    port: 3000 // Varsayılan port
  },
  preview: {
    open: true,
    port: 3000
  }
});
