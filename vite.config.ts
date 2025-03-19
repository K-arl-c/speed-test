import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    allowedHosts:['8e37-82-16-4-18.ngrok-free.app'],
  }
})

