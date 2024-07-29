import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        tcotta: '#89430a',
        navbg: '#f4eee0',
        bgc: '#edebe6',
        textcolor: '#333333',
        greyer: '#e0e0e0',
      },
    },
  },
  plugins: [],
};

export default config;