/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', 'sans-serif'] },
      colors: { ink: '#22362f', cream: '#f7f3eb', moss: '#466557' },
      boxShadow: { card: '0 24px 70px rgba(47, 70, 60, 0.13)' },
    },
  },
  plugins: [],
}
