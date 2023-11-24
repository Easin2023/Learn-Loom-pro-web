/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'font-caveat': "'Caveat', cursive",
        'font-playpen': "'Playpen Sans', cursive"
      }
    },
  },
  plugins: [require("daisyui")] //nextui()],
};
