/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Josefin Sans", "sans-serif"] },

    colors: {
      //primary
      BBlue: "#0077FF",
      CheckOne: "#3291FF",
      CheckTwo: "#EF4DB6",
      white: "#FFFFFF",
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

    backgroundImage: {
      mobile_dark: "url('/src/assets/bg-mobile-dark.jpg')",
      mobile_light: "url('/src/assets/bg-mobile-light.jpg')",
      desktop_dark: "url('/src/assets/bg-desktop-dark.jpg')",
      desktop_light: "url('/src/assets/bg-desktop-light.jpg')",
    },

    extend: {},
  },
  plugins: [],
};
