import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CC0000',
          50:  '#FFF5F5',
          100: '#FFE0E0',
          200: '#FFBDBD',
          300: '#FF8A8A',
          400: '#FF4D4D',
          500: '#FF1A1A',
          600: '#CC0000',
          700: '#A30000',
          800: '#7A0000',
          900: '#520000',
          950: '#3D0000',
        },
        secondary: {
          DEFAULT: '#000000',
        },
        accent: {
          DEFAULT: '#A30000',
        },
        background: '#FAFAF8',
        surface: '#FFFFFF',
        text: {
          DEFAULT: '#1A1A1A',
          muted: '#666666',
        },
        border: '#E5E5E0',
      },
      fontFamily: {
        sans:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.0', fontWeight: '800' }],
        'h1':      ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2':      ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3':      ['1.75rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h4':      ['1.375rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body':    ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        'small':   ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      maxWidth: {
        'site': '1280px',
      },
      borderRadius: {
        'brand':    '8px',
        'brand-lg': '12px',
        'brand-xl': '16px',
      },
      boxShadow: {
        'brand-sm': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'brand':    '0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)',
        'brand-lg': '0 16px 40px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
