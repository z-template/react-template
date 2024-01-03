import generouted from '@generouted/react-router/plugin'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { iconDts } from './vite-plugin/icon.dts'

export default ({ mode, command }: ConfigEnv): UserConfig => {
  const { VITE_APP_BASE_API_URL } = loadEnv(mode, './env')
  console.log('mode', mode, command, VITE_APP_BASE_API_URL)
  return {
    envDir: './env',
    plugins: [
      react(),
      generouted({
        source: {
          routes: ['./src/pages/**/[\\w[-]*.{jsx,tsx}', '!./src/pages/**/components/**'],
          modals: './src/pages/**/[+]*.{jsx,tsx}'
        }
      }),
      legacy({}),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[name]',
        inject: 'body-first',
        customDomId: '__svg__icons__dom__'
      }),
      iconDts()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    server: {
      port: 3456,
      open: true,
      headers: {
        // 开发环境vite或generouted偶发缓存问题，导致页面UI更新不及时
        'cache-control': 'no-store'
      },
      proxy: {
        '/prod-api/': {
          target: 'https://vue.ruoyi.vip',
          changeOrigin: true
        }
      }
    },
    esbuild: {
      drop: mode === ' production' ? ['console', 'debugger'] : []
    },
    build: {
      chunkSizeWarningLimit: 1200,
      assetsDir: 'static/img/',
      rollupOptions: {
        output: {
          manualChunks: {
            // 分包
            vendor: ['react', 'react-dom', 'react-router-dom']
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
}
