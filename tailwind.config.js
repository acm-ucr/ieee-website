/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieee: {
          lightblue: "#A2E1FF",
          blue: "#5EB7FF",
          bluePurple: "#7D91EA",
          purple: "#A571CD",
          pinkPurple: "#BF4CA0",
          pink: "#C62368",
          black: "#001220",
        },
      },
      fontFamily: {
        teko: "var(--teko-font)",
        giden: "var(--giden-font)",
      },
    },
  },
  // plugins: [require("@tailwindcss/aspect-ratio")],
};
