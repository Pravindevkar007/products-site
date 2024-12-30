import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
    build: {
      target: "ES2022",
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
