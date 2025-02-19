// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 10000, 
    host: '0.0.0.0' // Ensures the server is accessible
  }
});
