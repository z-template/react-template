/** @type {import('tailwindcss').Config} */
import { colors } from './src/config/themeColor'

export default {
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        danger: colors.danger
      },
      textColor: {
        color: 'rgba(0,0,0,.85)' // 默认文本颜色
      }
    }
  },
  plugins: []
}
