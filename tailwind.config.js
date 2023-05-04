/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: false,
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
          darkblue: "#0075FF",
        },
      },
      fontFamily: {
        teko: "var(--teko-font)",
        giden: "var(--giden-font)",
      },
      backgroundImage: {
        circuitboard: "url('/assets/circuit-board.svg')",
      },
    },
  },
  // plugins: [require("@tailwindcss/aspect-ratio")],
};
