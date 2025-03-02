import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom/client',
        'react-router-dom',
        'react-redux',
        '@reduxjs/toolkit',
        'redux-persist',
        'axios',
        'formik',
        'yup',
      ],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom/client',
      'react-router-dom',
      'react-redux',
      '@reduxjs/toolkit',
      'redux-persist',
      'axios',
      'formik',
      'yup',
    ],
  },
});
