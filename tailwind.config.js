/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      //primary
      BBlue: "#0077FF",
      Check: "linear-gradient #3291FF to #EF4DB6",
      //light
      LGray: "#FAFAFA",
      VLGrayBlue: "#EDEFF6",
      lGrayBlue: "#D5D8E6",
      DGrayBlue: "#7E88C3",
      VDGrayBlue: "#3C4261",
      //dark
      VDBlue: "#050505",
      VDDesBlue: "#0C0C18",
      LGrayBlue: "#E8EBF3",
      LGrayBlueHover: "#EDEFF6",
      DDGrayBlue: "#8892B4",
      VDGrayishBlueTwo: "#2D3254",
      VDGrayishBlueThree: "#3C4151",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },

    fontSize: {
      small: 14,
      normal: 18,
      large: 22,
      xLarge: 26,
    },
    fontWeight: {
      400: 400,
      700: 700,
    },
    extend: {},
  },
  plugins: [],
};
