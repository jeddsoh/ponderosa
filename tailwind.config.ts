import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
      nextui({
        themes: {
          light: {
            colors: {
              background: "#FFFFFF", // or DEFAULT
              foreground: "#0c0a09", // or 50 to 900 DEFAULT
              primary: {
                DEFAULT: "#f97316",
                foreground: "#431407",
              },
              focus: "#f97316",
            },
          },
        },
      }),
    ],
}
export default config
