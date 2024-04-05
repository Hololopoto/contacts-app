/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        glowy: "url('/src/components/Contact/Images/light-blue.svg')",
      },
    },
  },
  plugins: [],
};
