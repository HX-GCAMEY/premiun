import type {Config} from "tailwindcss";
import themer from "@tailus/themer";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      maxHeight: {
        "400": "400px",
      },

      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
      colors: ({colors}) => ({
        primary: colors.blue,
        secondary: colors.purple,
        accent: colors.pink,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.blue,
        gray: colors.zinc,
        white: colors.white,
        black: colors.black,
        transparent: colors.transparent,
        "custom-purple": "#373561",
        "custom-yellow": "#9DA86C",
      }),
    },
  },
  plugins: [themer, require("flowbite/plugin")],
};
export default config;
