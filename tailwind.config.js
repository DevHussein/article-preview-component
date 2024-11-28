/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 40px 40px -10px hsla(210, 29%, 84%, 0.5034)",
        customSM: "0px 10px 10px 0px hsla(210, 29%, 84%, 0.5034)",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "desaturated-dark-blue": "hsl(214, 17%, 51%)",
        "grayish-blue": "hsl(212, 23%, 69%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
