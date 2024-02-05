import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from "fs"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      cert: fs.readFileSync(path.resolve(__dirname, 'pem', 'cert.pem')),
      key: fs.readFileSync(path.resolve(__dirname, 'pem', 'key.pem'))
    }
  }
})
