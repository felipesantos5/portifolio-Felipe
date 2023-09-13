/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1000px" },
      md: { max: "750px" },
      sm: { max: "600px" },
    },
    minHeight: {
      "80vh": "83.1vh",
    },
    extend: {
      maxWidth: {
        1444: "1444px",
      },
      spacing: {},
    },
  },
  plugins: [],
};
