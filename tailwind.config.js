/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        primary2: 'var(--primary-color-2)',
        primaryOpacity: 'var(--primary-opacity)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        background: 'var(--bg-color)',
        background2: 'var(--bg-secondary)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        black: 'var(--black)',
        white: 'var(--white)',
        border: 'var(--border-color)',
        borderHover: 'var(--border-hover)',
        success: 'var(--success-color)',
        info: 'var(--info-color)',
        error: 'var(--error-color)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
    }
  ],
}