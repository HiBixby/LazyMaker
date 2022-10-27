/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: "#0371e8",
          sky:"#83b3ff",
        },
      },
    },
  },
  plugins: [],
};
