/**
 * @type {import('vite').UserConfig}
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },

  build:{
    brotliSize:false,
    outDir:'dist',
    assetsDir:'static',
    // rollupOptions:{
    //   input:{
    //     main:path.resolve(__dirname,'index.html'),
    //     nested:path.resolve(__dirname,'/nested/index.html')
    //   }
    // }
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server:{
    https:false,
    open:false,
    host:'0.0.0.0',
    proxy:{
      '/api':{
        target:'http://localhost:7001',
        changeOrigin:true,
        ws:true,
        rewrite:(path)=>path.replace(/^\/api/,"")
      }
    }
  }
})
