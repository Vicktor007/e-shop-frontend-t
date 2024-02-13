import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
      // "/api/": "https://eshop-api-t.onrender.com",
      // "/uploads/": "https://eshop-api-t.onrender.com",
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     manifest: true,
//     rollupOptions: {
//       input: './src/main.jsx',
//     },
//   },
//   server: {
//     proxy: {
//       "/api/": "https://e-shop-api-bnt6.onrender.com", // the address that u serve in the backend 
//     },
//   },
// })