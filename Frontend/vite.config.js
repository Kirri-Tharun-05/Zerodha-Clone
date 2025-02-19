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
    allowedHosts: ['zerodha-clone-dashboard-zf0s.onrender.com'] // Allow your deployed domain
  }
});
