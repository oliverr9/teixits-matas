/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'matas-rojo': '#9A0809', 
        'matas-gris': '#303841',
        'matas-gris-2': '#3A4750',
        },
      },
    },
  plugins: [],
}