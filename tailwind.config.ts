import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#050505",
        white: "#FAFAFA",
        pureWhite: "#FFFFFF",
        gray: {
          7: "#F1F0EF",
          6: "#E3E0DE",
          5: "#CECBC9",
          4: "#817D7C",
          3: "#2A2727",
          2: "#171615",
        },
        red: "#171615",
        yellow: "#F3CD58",
        green: "#2CB864",
      },
    },
  },
  plugins: [],
};
export default config;
