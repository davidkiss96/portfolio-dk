const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx,html}",
        "./components/**/*.{js,ts,jsx,tsx,html}",
      ],
      theme: {
        extend: {},
      },
    },
    autoprefixer: {},
  },
};
