import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import type { ConfigEnv, UserConfig } from 'vite'
import Pages from 'vite-plugin-pages'

export default ({ mode, command }: ConfigEnv): UserConfig => {
  console.log('mode', mode, command)
  return {
    plugins: [
      react(),
      Pages({
        routeStyle: 'remix',
        extensions: [`tsx`],
        exclude: [`**/components/**/*`, `**/controller.tsx`, `**/demo/**/*`],
        importMode: 'async'
      }),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ]
  }
}
