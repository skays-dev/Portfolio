import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        card: "0px 7px 40px -25px #8362F0",
        icons: "0px 7px 40px -25px #8362F0",
      },
      flex: {
        '0': '0 0 auto',
        '1': '1 1'
      },
      display: {
        'initial': 'initial'
      }
    },
  },
  plugins: [],
}
export default config
