// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173, // Use Render's assigned port
    strictPort: true, // Ensures Vite doesn't pick a random port
    allowedHosts: ['zerodha-clone-sr5m.onrender.com'] // Allow your deployed domain
  }
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',
//     port: process.env.PORT || 5173, // Use Render's assigned port
//     strictPort: true, // Ensures Vite doesn't pick a random port
//     allowedHosts: ['zerodha-clone-sr5m.onrender.com'] // Allow your deployed domain
//   },
//   define: {
//     'process.env.NODE_ENV': '"production"' // Ensure production mode
//   },
//   build: {
//     outDir: 'dist', // Output folder for production build
//     minify: false, // Enables minification for performance
//     sourcemap: false, // Disable source maps to reduce bundle size
//     chunkSizeWarningLimit: 500, // Avoid chunk size warnings
//   }
// });
