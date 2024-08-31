/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            inter: ["Inter", "sans-serif"],
            kanit: ["Kanit", "sans-serif"],
         },
      },
      colors: {
         purple: "#6c63ff",
         white: "#f7f7f7",
         black: "#252525",
      },
      screens: {
         sm: { max: "484px" },
      },
   },
   darkMode: "selector",
   plugins: [],
};
