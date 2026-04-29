/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0b0d',
          card: '#111318',
          elevated: '#16191f',
          section: '#0d0f13',
        },
        accent: {
          DEFAULT: '#00d4ff',
          hover: '#00b8e0',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a8b8',
          muted: '#565e6e',
        },
        border: {
          DEFAULT: '#1e2330',
          accent: '#00d4ff',
        },
        tag: {
          bg: '#1a1f2e',
          text: '#a0a8b8',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '4px',
        md: '6px',
      },
    },
  },
  plugins: [],
}
