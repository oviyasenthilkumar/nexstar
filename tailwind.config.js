/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,html}',
    './components/**/*.{js,ts,jsx,tsx,html}',
    './pages/**/*.{js,ts,jsx,tsx,html}',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Source Serif Pro', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        sora: ['var(--font-sora)', 'sans-serif'],
        spartan: ['var(--font-league-spartan)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
