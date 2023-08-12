/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2f76e1",
        darkblue: "#2866c3",
      },
      fontFamily: {
        // heynovember: ["HeyNovember", "serif"],
        // bebasneue: ["BebasNeue-Regular", "sans-serif"],
        // bevietnampblack:["BeVietnamPro-Regular", "sans-serif"],
        // bevietnam:["BeVietnam", "sans-serif"],
        // bevietnambold:["BeVietnam-Bold", "sans-serif"],
        // bignoodle:["big_noodle_titling", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xm: "844px",
      mm: "1060px",
      me: "1155px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

