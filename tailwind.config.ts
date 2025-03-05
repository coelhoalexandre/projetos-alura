import type { Config } from 'tailwindcss';
import pluginTypography from '@tailwindcss/typography';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-dark': 'var(--primary-color-dark)',
        'primary-light': 'var(--primary-color-light)',
      },
    },
  },
  plugins: [pluginTypography],
} satisfies Config;
