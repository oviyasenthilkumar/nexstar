/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // adjust based on your structure
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        sora: ['var(--font-sora)', 'sans-serif'],
        spartan: ['var(--font-league-spartan)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
