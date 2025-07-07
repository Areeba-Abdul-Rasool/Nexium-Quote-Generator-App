/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // @ts-ignore
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['pastel', 'cupcake', 'light', 'dark'],
  },
};
