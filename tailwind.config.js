const { colors } = require("@mui/material");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#E6E7DF",
        black: "#1C1C1C",
        gray: "#565655",
        white: "#FFFFFF",
        buttonColor: "#393938",
        pColor: "#242424",
        linkColor: "#373737",
        outlineColor: "#F1F0EF",
        borderColor: "#ECEBEA",
        backgroundColor: "#EFEEED",
        normalBackgroundColor: "#EEEEEE",
      },
      fontFamily: {
        otterco: ["var(--font-otterco)"],
        founders: ["var(--font-founders)"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
