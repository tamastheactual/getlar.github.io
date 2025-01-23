import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        "card-shadow": "3px 3px 0 var(--card-shadow-color)",
      },
      colors: {
        tcotta: '#023209', // Light mode terracotta
        navbg: '#f2f2f2',  // Light mode navigation background
        bgcolor: '#fcfcfc',    // Light mode content background
        textcolor: '#222222', // Light mode text color
        greyer: '#d6d6d6', // Light mode dividers
        dark: {
          tcotta: '#4d8d57', // Dark mode terracotta
          navbg: '#383938',  // Dark mode navigation background
          bgcolor: '#3e3f3e',    // Dark mode content background
          textcolor: '#f0f0f0', // **Corrected**: Dark mode text color
          greyer: '#3a3a3a', // Dark mode dividers
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
