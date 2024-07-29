/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        tcotta: '#89430a',
        navbg: '#f4eee0',
        bgc: '#edebe6',
        textcolor: '#333333',
      },
    },
	},
	plugins: [],
};