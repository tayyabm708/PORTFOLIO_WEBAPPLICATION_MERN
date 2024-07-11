/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {

      lg: { max: "2023px" },
    
      sm: { max: "1000px" },
      
      
      // "2xl": { max: "1535px" },
      // // => @media (max-width: 1535px) { ... }

      // xl: { max: "1279px" },
      // // => @media (max-width: 1279px) { ... }

      // md: { max: "767px" },
      // // => @media (max-width: 767px) { ... }


      
      
    },
  },
  plugins: [],
};
