/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        color: 'rgba(0,0,0,.85)' // 默认文本颜色
      }
    }
  },
  plugins: []
}
