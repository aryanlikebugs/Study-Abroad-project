// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'http://localhost:5000'
//     }
//   }
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Local backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/external-api": {
        target: "https://heatmap-api-pakj.onrender.com", // Remote API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/external-api/, ""),
      },
    },
  },
});
