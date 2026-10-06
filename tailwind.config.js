/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        line: 'var(--line)',
        // Demo sites (/portfolio/*) set these per client identity on <html>, as "r g b" channels
        // so opacity modifiers like bg-d-accent/15 work.
        d: {
          bg: 'rgb(var(--d-bg) / <alpha-value>)',
          fg: 'rgb(var(--d-fg) / <alpha-value>)',
          muted: 'rgb(var(--d-muted) / <alpha-value>)',
          accent: 'rgb(var(--d-accent) / <alpha-value>)',
          'accent-fg': 'rgb(var(--d-accent-fg) / <alpha-value>)',
          surface: 'rgb(var(--d-surface) / <alpha-value>)',
          line: 'rgb(var(--d-line) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-schibsted)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--d-font-display)', 'serif'],
        body: ['var(--d-font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
}
