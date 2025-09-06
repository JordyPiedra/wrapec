import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 aquí habilitamos hosts externos como ngrok
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'a19d156b3b56.ngrok-free.app' // ← pega aquí tu host de ngrok
    ]
  }
})
