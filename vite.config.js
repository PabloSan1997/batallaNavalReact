import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass  from "vite-plugin-sass-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass()],
  base:"/batallaNavalReact/"
})
