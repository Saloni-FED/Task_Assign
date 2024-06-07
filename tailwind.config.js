/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        op_san: ["Open Sans"],
        lit: ["Literata", "serif"],
      },
      backgroundImage: {
        "custom-gradient": `
          linear-gradient(83.68deg, rgba(135, 201, 202, 0.5) 13.56%, rgba(225, 254, 255, 0.5) 85.62%),
          linear-gradient(359.9deg, #FFFFFF 35.93%, #FFFFFF 57.88%, #C7E9FF 99.92%)
        `,
      },
      boxShadow: {
        custom: "0px 2.8px 2.8px 0px #00000040",
      },
      screens: {
        xs: { min: "300px", max: "500px" },
        "sm-md": { min: "500px", max: "760px" },
        sm_s : { min: "325px", max: "425px" }
      },
    },
  },
  plugins: [],
};
